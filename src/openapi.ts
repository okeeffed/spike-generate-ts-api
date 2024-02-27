import * as z from "zod";

interface ApiOperation {
  path: string;
  method: string;
  operationId: string;
  parameters: ApiParameter[];
  requestBody?: ApiRequestBody;
  responses: ApiResponse[];
}

interface ApiParameter {
  in: string;
  name: string;
  required: boolean;
  type: string;
}

interface ApiRequestBody {
  required: boolean;
  content: ApiContent;
}

interface ApiResponse {
  statusCode: string;
  description: string;
  content?: ApiContent;
}

interface ApiContent {
  [mimeType: string]: {
    schema: ApiSchema;
  };
}

interface ApiSchema {
  // This could represent a reference to a component or an inline schema
  $ref?: string;
  type?: string;
  properties?: { [propertyName: string]: ApiSchema };
  // Add other properties as needed
}

type TODO = any;

// // Function to parse a specific path and operation into an ApiOperation object
// function parseOperation(spec: any, path: string, method: string): ApiOperation {
//   // This would involve parsing the spec for the given path and method
//   // to extract parameters, request body, and responses, and convert them
//   // into the structures defined above.
//   // You'll need to handle `$ref` resolution, which might involve recursively
//   // parsing the referenced components.
// }

// // Example usage:
// const operation = parseOperation(
//   apiSpec,
//   "/v2/payments/qr/{qr_code}/authorize",
//   "post"
// );

// interface OpenAPIPath {
//   [operation: string]: {
//     post: OperationDetail;
//   };
// }

interface OperationDetail {
  operationId: string;
  parameters: Parameter[];
  requestBody?: RequestBody;
  responses: { [statusCode: string]: Response };
}

interface Parameter {
  in: string;
  name: string;
  required: boolean;
  schema: Schema;
}

interface RequestBody {
  required: boolean;
  content: { [mediaType: string]: { schema: Schema } };
}

interface Response {
  description: string;
  content: { [mediaType: string]: { schema: Schema } };
}

interface Schema {
  type?: string;
  $ref?: string;
  properties?: { [key: string]: Schema };
  items?: Schema;
  anyOf?: Schema[];
  allOf?: Schema[];
  oneOf?: Schema[];
  enum?: Array<string | number>;
  format?: string;
  // Add additional schema properties as needed
}

// Main function to parse a schema and return TypeScript type definitions
// Function to resolve $ref to the actual schema object
// Helper function to resolve $ref to the actual schema object
function resolveRef(ref: string, openAPISpec: any): any {
  const parts = ref.split("/");
  let result = openAPISpec;
  for (const part of parts.slice(1)) {
    result = result[part];
  }
  return result;
}

// Main function to parse a schema and return Zod schema code as a string
function parseSchema(schema: any, openAPISpec: any): string {
  if (schema.$ref) {
    const resolvedRef = resolveRef(schema.$ref, openAPISpec);
    return parseSchema(resolvedRef, openAPISpec); // Recursively resolve $refs
  }

  switch (schema.type) {
    case "string":
      return "z.string()";
    case "number":
      return "z.number()";
    case "boolean":
      return "z.boolean()";
    case "object":
      return parseObjectSchema(schema, openAPISpec);
    case "array":
      if (!schema.items) {
        throw new Error("Array schema must have an 'items' property.");
      }
      return `z.array(${parseSchema(schema.items, openAPISpec)})`;
    default:
      return parseComplexSchema(schema, openAPISpec);
  }
}

// Parses object schemas to Zod schema code strings
function parseObjectSchema(schema: any, openAPISpec: any): string {
  const properties = schema.properties || {};
  const propsStr = Object.entries(properties)
    .map(
      ([key, propSchema]) =>
        `${JSON.stringify(key)}: ${parseSchema(propSchema, openAPISpec)}`
    )
    .join(", ");
  return `z.object({ ${propsStr} })`;
}

// Handles anyOf, allOf, oneOf by combining parsed schema code strings appropriately
function parseComplexSchema(schema: any, openAPISpec: any): string {
  if (schema.anyOf) {
    return `z.union([${schema.anyOf.map((s: any) => parseSchema(s, openAPISpec)).join(", ")}])`;
  }
  if (schema.allOf) {
    // Simplified handling for allOf; real usage might need manual adjustments
    return (
      schema.allOf.map((s: any) => parseSchema(s, openAPISpec)).join(".and(") +
      ")".repeat(schema.allOf.length - 1)
    );
  }
  if (schema.oneOf) {
    return `z.union([${schema.oneOf.map((s: any) => parseSchema(s, openAPISpec)).join(", ")}])`;
  }
  if (schema.enum) {
    return `z.enum(${JSON.stringify(schema.enum)})`;
  }
  // Fallback for types not explicitly handled
  return "z.any()";
}

// Function to parse an operation
export function parseOperation(operation: OperationDetail, openAPISpec: TODO) {
  // Parse parameters
  const params = operation.parameters.map((param) => {
    return {
      name: param.name,
      in: param.in,
      type: parseSchema(param.schema, openAPISpec), // Use parseSchema to handle $ref inside parameters
    };
  });

  // Parse request body
  let requestBody = null;
  let refs: Record<string, any> = {};
  if (operation.requestBody) {
    const content = operation.requestBody.content["application/json"];
    if (content && content.schema) {
      requestBody = parseSchema(content.schema, openAPISpec) ?? "z.void()";
    } else {
      requestBody = "z.void()";
    }
  }

  // Parse responses
  const responses = Object.entries(operation.responses).map(
    ([statusCode, response]) => {
      if (!response.content) {
        console.log("No content for response", response);
        return {
          statusCode: statusCode,
          body: "z.void()",
        };
      }

      const content = response.content["application/json"];
      if (content && content.schema) {
        if (content.schema.$ref) {
          const nameOfRef = content.schema.$ref.split("/").pop();
          if (!nameOfRef) {
            throw new Error("Invalid $ref");
          }

          if (refs[nameOfRef]) {
            return {
              statusCode,
              body: refs[nameOfRef],
            };
          }

          refs[nameOfRef] = parseSchema(content.schema, openAPISpec);

          return {
            statusCode,
            body: refs[nameOfRef],
          };
        } else {
          return {
            statusCode,
            body: parseSchema(content.schema, openAPISpec),
          };
        }
      }
    }
  );

  // Here you would generate TypeScript interfaces/types based on parsed info
  // if (params) {
  //   console.log("params", params);
  // }
  // console.log("responses", responses);

  // if (requestBody) {
  //   console.log("requestBody", requestBody);
  // }

  return {
    params,
    responses,
    requestBody,
    operationId: operation.operationId,
  };
}
