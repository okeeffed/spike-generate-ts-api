import { parse, stringify } from "yaml";
import { readFile, writeFile } from "node:fs/promises";
import { eitherify, eitherifyAsync, wrap } from "@okeeffed/eitherify";
import { pipe } from "remeda";
import path from "node:path";
import { inspect } from "node:util";
import { parseOperation } from "./openapi";
import { open } from "node:inspector";
import { generateRouter as _generateRouter } from "./handlebars";
import * as prettier from "prettier";
import camelcase from "lodash.camelcase";

async function _readApiSpec(path: string) {
  return await readFile(path, "utf-8");
}

function _parseYaml(yaml: string) {
  return parse(yaml);
}

function _getPaths(apiSpec: any) {
  return apiSpec.paths;
}

function _getComponentSchemas(apiSpec: any) {
  return apiSpec.components.schemas;
}

const log = eitherify((data: any) => {
  console.log(inspect(data, { depth: null }));
  return data;
});
const parseYaml = eitherify(_parseYaml);
const readApiSpec = eitherifyAsync(_readApiSpec);
const getPaths = eitherify(_getPaths);
const getComponentSchemas = eitherify(_getComponentSchemas);
const generateRouter = eitherify(_generateRouter);

async function main() {
  const filePath = path.resolve(__dirname, "../api.yaml");

  const openAPISpec = pipe(await pipe(wrap(filePath), readApiSpec), parseYaml);

  const schemas = pipe(openAPISpec, getComponentSchemas);
  const operations = pipe(openAPISpec, getPaths);

  if (!operations.success) {
    throw operations.error;
  }

  if (!openAPISpec.success) {
    throw openAPISpec.error;
  }

  const pathKeys = Object.keys(operations.data);
  const parsedOperations = [];

  for (const pathKey of pathKeys) {
    const pathOperations = Object.keys(operations.data[pathKey]);
    // console.log(operations.data[pathKey]);
    for (const pathOperation of pathOperations) {
      const operation = operations.data[pathKey][pathOperation];
      // console.log(operation);
      const res = parseOperation(operation, openAPISpec.data);
      const headers = res.params.filter((param) => param.in === "header");
      const query = res.params.filter((param) => param.in === "query");
      const pathParams = res.params.filter((param) => param.in === "path");

      parsedOperations.push({
        ...res,
        requestBody: res.requestBody
          ? res.requestBody
          : pathOperation !== "get"
            ? "z.void()"
            : null,
        headers,
        query,
        pathParams,
        path: pathKey,
        method: pathOperation.toUpperCase(),
        operationId: camelcase(`${pathOperation} ${pathKey}`),
      });
    }
  }

  const contractCode = pipe(wrap(parsedOperations), generateRouter);

  if (!contractCode.success) {
    throw contractCode.error;
  }

  const output = await prettier.format(contractCode.data, {
    parser: "typescript",
  });

  await writeFile(path.resolve(__dirname, "../contract.ts"), output);
}

main();
