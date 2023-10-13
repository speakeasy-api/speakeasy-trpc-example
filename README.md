<div align="center">

<a href="[Speakeasy](https://speakeasyapi.dev/)">
  <img src="https://github.com/speakeasy-api/speakeasy/assets/68016351/e959f81a-b250-4003-8c5c-a45b9463fc95" alt="Speakeasy Logo" width="400">
<h2>Speakeasy tRPC OpenAPI Example</h2>
</a>

</div>

This example tRPC app demonstrates Speakeasy-recommended practices for generating clear OpenAPI specifications and SDKs.

## Prerequisites

You need to have [Node.js](https://nodejs.org/) installed on your system to run this project.

To generate an SDK, you'll also need the Speakeasy CLI installed, or use the Speakeasy dashboard.

## Installation

To install the application on your local machine:

1. Clone the repository:
```bash
git clone https://github.com/speakeasy-api/speakeasy-trpc-example.git
```

2. Navigate into the directory:
```bash
cd speakeasy-trpc-example
```

3. Install all dependencies for the application using Yarn:
```bash
npm install
```

4. [Install Speakeasy CLI](https://github.com/speakeasy-api/speakeasy#installation):
```bash
brew install speakeasy-api/homebrew-tap/speakeasy
```

## Running the application

### Working with the OpenAPI specification

To generate an OpenAPI spec in YAML format, run:

```bash
npm run generate-openapi
```

Additionally, you can generate both the specification file and a TypeScript SDK for your API using:

```bash
npm run generate-openapi-and-sdk
```

## License

This project is licensed under the terms of the Apache 2.0 license.