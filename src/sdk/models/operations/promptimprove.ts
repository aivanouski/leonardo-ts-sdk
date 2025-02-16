/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export type PromptImproveRequestBody = {
    /**
     * The prompt to improve.
     */
    prompt: string;
};

export type PromptGenerationOutput = {
    /**
     * API Credits Cost for Random Prompt Generation. Available for Production API Users.
     */
    apiCreditCost?: number | undefined;
    /**
     * The improved prompt.
     */
    prompt?: string | undefined;
};

/**
 * Responses for POST /prompt/improve
 */
export type PromptImproveResponseBody = {
    promptGeneration?: PromptGenerationOutput | undefined;
};

export type PromptImproveResponse = {
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
     * Responses for POST /prompt/improve
     */
    object?: PromptImproveResponseBody | undefined;
};

/** @internal */
export namespace PromptImproveRequestBody$ {
    export const inboundSchema: z.ZodType<PromptImproveRequestBody, z.ZodTypeDef, unknown> = z
        .object({
            prompt: z.string(),
        })
        .transform((v) => {
            return {
                prompt: v.prompt,
            };
        });

    export type Outbound = {
        prompt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PromptImproveRequestBody> = z
        .object({
            prompt: z.string(),
        })
        .transform((v) => {
            return {
                prompt: v.prompt,
            };
        });
}

/** @internal */
export namespace PromptGenerationOutput$ {
    export const inboundSchema: z.ZodType<PromptGenerationOutput, z.ZodTypeDef, unknown> = z
        .object({
            apiCreditCost: z.number().int().default(4),
            prompt: z.string().default("The improved prompt."),
        })
        .transform((v) => {
            return {
                apiCreditCost: v.apiCreditCost,
                prompt: v.prompt,
            };
        });

    export type Outbound = {
        apiCreditCost: number;
        prompt: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PromptGenerationOutput> = z
        .object({
            apiCreditCost: z.number().int().default(4),
            prompt: z.string().default("The improved prompt."),
        })
        .transform((v) => {
            return {
                apiCreditCost: v.apiCreditCost,
                prompt: v.prompt,
            };
        });
}

/** @internal */
export namespace PromptImproveResponseBody$ {
    export const inboundSchema: z.ZodType<PromptImproveResponseBody, z.ZodTypeDef, unknown> = z
        .object({
            promptGeneration: z.lazy(() => PromptGenerationOutput$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.promptGeneration === undefined
                    ? null
                    : { promptGeneration: v.promptGeneration }),
            };
        });

    export type Outbound = {
        promptGeneration?: PromptGenerationOutput$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PromptImproveResponseBody> = z
        .object({
            promptGeneration: z.lazy(() => PromptGenerationOutput$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                ...(v.promptGeneration === undefined
                    ? null
                    : { promptGeneration: v.promptGeneration }),
            };
        });
}

/** @internal */
export namespace PromptImproveResponse$ {
    export const inboundSchema: z.ZodType<PromptImproveResponse, z.ZodTypeDef, unknown> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => PromptImproveResponseBody$.inboundSchema).optional(),
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
        object?: PromptImproveResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, PromptImproveResponse> = z
        .object({
            contentType: z.string(),
            statusCode: z.number().int(),
            rawResponse: z.instanceof(Response).transform(() => {
                throw new Error("Response cannot be serialized");
            }),
            object: z.lazy(() => PromptImproveResponseBody$.outboundSchema).optional(),
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
