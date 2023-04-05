<div align="center">
   <img src="https://user-images.githubusercontent.com/6267663/230025738-42a4980e-a5ea-4d00-a591-65e8de14de85.png" width="200">
   <h1>Leonardo Typescript SDK</h1>
   <p>The API for creating stunning game assets with AI.</p>
   <a href="https://github.com/Leonardo-Interactive/leonardo-ts-sdk/actions"><img src="https://img.shields.io/github/actions/workflow/status/Leonardo-Interactive/leonardo-ts-sdk/speakeasy_sdk_generate.yml?style=for-the-badge" /></a>
   <a href="https://docs.leonardo.ai/"><img src="https://img.shields.io/static/v1?label=Docs&message=API Ref&color=000&style=for-the-badge" /></a>
   <a href="https://discord.gg/leonardo-ai"><img src="https://img.shields.io/static/v1?label=Discord&message=Join&color=7289da&style=for-the-badge" /></a>
</div>

<!-- Start SDK Installation -->
## SDK Installation

### NPM

```bash
npm add @leonardo-ai/sdk
```

### Yarn

```bash
yarn add @leonardo-ai/sdk
```
<!-- End SDK Installation -->

## Authentication

To get access to the API and fetch an API key, please sign up for [access](https://leonardo.ai/). 

## SDK Example Usage
<!-- Start SDK Example Usage -->
```typescript
import {
  CreateDatasetRequestBody,
  CreateDatasetResponse
} from "@leonardo-ai/sdk/dist/sdk/models/operations";

import { AxiosError } from "axios";
import { Leonardo } from "@leonardo-ai/sdk";
const sdk = new Leonardo({
  security: {
    bearerAuth: "Bearer YOUR_BEARER_TOKEN_HERE",
  },
});

const req: CreateDatasetRequestBody = {
  description: "corrupti",
  name: "provident",
};

sdk.dataset.createDataset(req).then((res: CreateDatasetResponse | AxiosError) => {
   // handle response
});
```
<!-- End SDK Example Usage -->

<!-- Start SDK Available Operations -->
## Available Resources and Operations


### dataset

* `createDataset` - Create a Dataset
* `deleteDatasetById` - Delete a Single Dataset by ID
* `getDatasetById` - Get a Single Dataset by ID
* `uploadDatasetImage` - Upload dataset image
* `uploadDatasetImageFromGen` - Upload a Single Generated Image to a Dataset

### generation

* `createGeneration` - Create a Generation of Images
* `deleteGenerationById` - Delete a Single Generation
* `getGenerationById` - Get a Single Generation
* `getGenerationsByUserId` - Get generations by user ID

### initImage

* `deleteInitImageById` - Delete init image
* `getInitImageById` - Get single init image
* `uploadInitImage` - Upload init image

### model

* `createModel` - Train a Custom Model
* `deleteModelById` - Delete a Single Custom Model by ID
* `getModelById` - Get a Single Custom Model by ID

### user

* `getUserSelf` - Get user information

### variation

* `createVariationUpscale` - Create upscale
* `getVariationById` - Get variation by ID
<!-- End SDK Available Operations -->

### SDK Generated by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
