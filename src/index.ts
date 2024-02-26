import { parse, stringify } from "yaml";
import { readFile, writeFile } from "node:fs/promises";
import { eitherify, eitherifyAsync, wrap } from "@okeeffed/eitherify";
import { pipe } from "remeda";
import path from "node:path";
import { inspect } from "node:util";

async function _readApiSpec(path: string) {
  return await readFile(path, "utf-8");
}

function _parseYaml(yaml: string) {
  return parse(yaml);
}

function _getPaths(apiSpec: any) {
  return apiSpec.paths;
}

const log = eitherify((data: any) => {
  console.log(inspect(data, { depth: null }));
  return data;
});
const parseYaml = eitherify(_parseYaml);
const readApiSpec = eitherifyAsync(_readApiSpec);
const getPaths = eitherify(_getPaths);

async function main() {
  const filePath = path.resolve(__dirname, "../api.yaml");

  pipe(await pipe(wrap(filePath), readApiSpec), parseYaml, getPaths, log);
}

main();
