import { generateOpenApiDocument } from "trpc-openapi";

import { ExtendedDocument, ExtendedOperationObject } from "./extended-types";
import { appRouter } from "./router";

const openApiDocument = generateOpenApiDocument(appRouter, {
  title: "Speakeasy Bar API",
  description: "An API to order drinks from the Speakeasy Bar",
  version: "1.0.0",
  baseUrl: "http://localhost:3000",
  docsUrl: "http://example.com/docs",
  tags: ["drinks"],
});

openApiDocument.tags = [
  {
    name: "drinks",
    description: "Operations related to drinks",
  },
];

openApiDocument.components = {
  ...openApiDocument.components,
  schemas: openApiDocument?.components?.schemas || {},
};

(openApiDocument as ExtendedDocument)["x-speakeasy-retries"] = {
  strategy: "backoff",
  backoff: {
    initialInterval: 500,
    maxInterval: 60000,
    maxElapsedTime: 3600000,
    exponent: 1.5,
  },
  statusCodes: ["5XX"],
  retryConnectionErrors: true,
};

if (
  openApiDocument.paths &&
  openApiDocument.paths["/find"] &&
  openApiDocument.paths["/find"].get
) {
  (openApiDocument.paths["/find"].get as ExtendedOperationObject)[
    "x-speakeasy-name-override"
  ] = "searchDrink";
  (openApiDocument.paths["/find"].get as ExtendedOperationObject)[
    "x-speakeasy-retries"
  ] = {
    strategy: "backoff",
    backoff: {
      initialInterval: 500,
      maxInterval: 60000,
      maxElapsedTime: 3600000,
      exponent: 1.5,
    },
    statusCodes: ["5XX"],
    retryConnectionErrors: true,
  };
}

export { openApiDocument };
