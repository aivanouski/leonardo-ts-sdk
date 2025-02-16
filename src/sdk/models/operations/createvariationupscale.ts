/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters are provided in the request body as a JSON object
 */
export type CreateVariationUpscaleRequestBody = {
    id: string;
};

export type CreateVariationUpscaleSDUpscaleJobOutput = {
    /**
     * API Credits Cost for Upscale Variation. Available for Production API Users.
     */
    apiCreditCost?: number | null | undefined;
    id?: string | undefined;
};

/**
 * Responses for POST /variations/upscale
 */
export type CreateVariationUpscaleResponseBody = {
    sdUpscaleJob?: CreateVariationUpscaleSDUpscaleJobOutput | null | undefined;
};

export type CreateVariationUpscaleResponse = {
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
     * Responses for POST /variations/upscale
     */
    object?: CreateVariationUpscaleResponseBody | undefined;
};

/** @internal */
export namespace CreateVariationUpscaleRequestBody$ {
    export const inboundSchema: z.ZodType<
        CreateVariationUpscaleRequestBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });

    export type Outbound = {
        id: string;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationUpscaleRequestBody
    > = z
        .object({
            id: z.string(),
        })
        .transform((v) => {
            return {
                id: v.id,
            };
        });
}

/** @internal */
export namespace CreateVariationUpscaleSDUpscaleJobOutput$ {
    export const inboundSchema: z.ZodType<
        CreateVariationUpscaleSDUpscaleJobOutput,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });

    export type Outbound = {
        apiCreditCost?: number | null | undefined;
        id?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationUpscaleSDUpscaleJobOutput
    > = z
        .object({
            apiCreditCost: z.nullable(z.number().int()).optional(),
            id: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.apiCreditCost === undefined ? null : { apiCreditCost: v.apiCreditCost }),
                ...(v.id === undefined ? null : { id: v.id }),
            };
        });
}

/** @internal */
export namespace CreateVariationUpscaleResponseBody$ {
    export const inboundSchema: z.ZodType<
        CreateVariationUpscaleResponseBody,
        z.ZodTypeDef,
        unknown
    > = z
        .object({
            sdUpscaleJob: z
                .nullable(z.lazy(() => CreateVariationUpscaleSDUpscaleJobOutput$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.sdUpscaleJob === undefined ? null : { sdUpscaleJob: v.sdUpscaleJob }),
            };
        });

    export type Outbound = {
        sdUpscaleJob?: CreateVariationUpscaleSDUpscaleJobOutput$.Outbound | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        CreateVariationUpscaleResponseBody
    > = z
        .object({
            sdUpscaleJob: z
                .nullable(z.lazy(() => CreateVariationUpscaleSDUpscaleJobOutput$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.sdUpscaleJob === undefined ? null : { sdUpscaleJob: v.sdUpscaleJob }),
            };
        });
}

/** @internal */
export namespace CreateVariationUpscaleResponse$ {
    export const inboundSchema: z.ZodType<CreateVariationUpscaleResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => CreateVariationUpscaleResponseBody$.inboundSchema).optional(),
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
        object?: CreateVariationUpscaleResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CreateVariationUpscaleResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => CreateVariationUpscaleResponseBody$.outboundSchema).optional(),
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
