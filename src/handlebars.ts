import Handlebars from "handlebars";
import fs from "node:fs";
import path from "node:path";

// Load and compile the main template
const routerTemplateSrc = fs.readFileSync(
  path.resolve(__dirname, "_templates/router.hbs"),
  "utf8"
);
const routerTemplate = Handlebars.compile(routerTemplateSrc);

// Register the endpoint partial
const endpointPartialSrc = fs.readFileSync(
  path.resolve(__dirname, "_templates/endpoint.hbs"),
  "utf8"
);
Handlebars.registerPartial("endpoint", endpointPartialSrc);

export function generateRouter(data: any): string {
  // Create one big, uniqe ref objects of all refs
  const refs = data.reduce((acc: Record<string, any>, endpoint: any) => {
    return {
      ...acc,
      ...endpoint.refs,
    };
  }, {});

  // Generate the contract code
  const contractCode = routerTemplate({
    endpoints: data,
    refs,
  });

  console.log(contractCode.slice(0, 1000));

  return contractCode;
}
