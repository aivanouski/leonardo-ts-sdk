/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters can also be provided in the request body as a JSON object
 */
export type DeleteTextureGenerationByIdRequestBody = {
    id?: string | null | undefined;
};

export type DeleteTextureGenerationByIdRequest = {
    /**
     * _"id" is required (enter it either in parameters or request body)_
     */
    id: string;
    /**
     * Query parameters can also be provided in the request body as a JSON object
     */
    requestBody?: DeleteTextureGenerationByIdRequestBody | undefined;
};

/**
 * columns and relationships of "model_asset_texture_generations"
 */
export type ModelAssetTextureGenerations = {
    id?: string | null | undefined;
};

/**
 * Responses for DELETE /api/rest/v1/generations-texture/{id}
 */
export type DeleteTextureGenerationByIdResponseBody = {
    /**
     * columns and relationships of "model_asset_texture_generations"
     */
    deleteModelAssetTextureGenerationsByPk?: ModelAssetTextureGenerations | null | undefined;
};

export type DeleteTextureGenerationByIdResponse = {
    /**
     * HTTP response content type for this operation
     */
    contentType: string;
    /**
     * HTTP response status code for this operation
     */
    statusCode: number;
    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    rawResponse: Response;
    /**
     * Responses for DELETE /api/rest/v1/generations-texture/{id}
     */
    object?: DeleteTextureGenerationByIdResponseBody | undefined;
};

/** @internal */
export namespace DeleteTextureGenerationByIdRequestBody$ {
    export const inboundSchema: z.ZodType<
        DeleteTextureGenerationByIdRequestBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteTextureGenerationByIdRequestBody
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace DeleteTextureGenerationByIdRequest$ {
    export const inboundSchema: z.ZodType<
        DeleteTextureGenerationByIdRequest,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.string(),
            RequestBody: z
                .lazy(() => DeleteTextureGenerationByIdRequestBody$.inboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        id: string;
        RequestBody?: DeleteTextureGenerationByIdRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteTextureGenerationByIdRequest
    > = z
        .object({
            id: z.string(),
            requestBody: z
                .lazy(() => DeleteTextureGenerationByIdRequestBody$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                id: v.id,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace ModelAssetTextureGenerations$ {
    export const inboundSchema: z.ZodType<ModelAssetTextureGenerations, z.ZodTypeDef, unknown> = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ModelAssetTextureGenerations> = z
        .object({
            id: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace DeleteTextureGenerationByIdResponseBody$ {
    export const inboundSchema: z.ZodType<
        DeleteTextureGenerationByIdResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            delete_model_asset_texture_generations_by_pk: z
                .nullable(z.lazy(() => ModelAssetTextureGenerations$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.delete_model_asset_texture_generations_by_pk === undefined
                    ? null
                    : {
                          deleteModelAssetTextureGenerationsByPk:
                              v.delete_model_asset_texture_generations_by_pk,
                      }),
            };
        });

    export type Outbound = {
        delete_model_asset_texture_generations_by_pk?:
            | ModelAssetTextureGenerations$.Outbound
            | null
            | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteTextureGenerationByIdResponseBody
    > = z
        .object({
            deleteModelAssetTextureGenerationsByPk: z
                .nullable(z.lazy(() => ModelAssetTextureGenerations$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.deleteModelAssetTextureGenerationsByPk === undefined
                    ? null
                    : {
                          delete_model_asset_texture_generations_by_pk:
                              v.deleteModelAssetTextureGenerationsByPk,
                      }),
            };
        });
}

/** @internal */
export namespace DeleteTextureGenerationByIdResponse$ {
    export const inboundSchema: z.ZodType<
        DeleteTextureGenerationByIdResponse,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => DeleteTextureGenerationByIdResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                contentType: v.ContentType,
                statusCode: v.StatusCode,
                rawResponse: v.RawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: never;
        object?: DeleteTextureGenerationByIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        DeleteTextureGenerationByIdResponse
    > = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z
                .lazy(() => DeleteTextureGenerationByIdResponseBody$.outboundSchema)
                .optional(),
        })
        .transform((v) => {
            return {
                ContentType: v.contentType,
                StatusCode: v.statusCode,
                RawResponse: v.rawResponse,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
