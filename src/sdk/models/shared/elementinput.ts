/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type ElementInput = {
    /**
     * Unique identifier for element. Elements can be found from the List Elements endpoint.
     */
    akUUID?: string | null | undefined;
    /**
     * Weight for the element
     */
    weight?: number | null | undefined;
};

/** @internal */
export namespace ElementInput$ {
    export const inboundSchema: z.ZodType<ElementInput, z.ZodTypeDef, unknown> = z
        .object({
            akUUID: z.nullable(z.string()).optional(),
            weight: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.akUUID === undefined ? null : { akUUID: v.akUUID }),
                ...(v.weight === undefined ? null : { weight: v.weight }),
            };
        });

    export type Outbound = {
        akUUID?: string | null | undefined;
        weight?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ElementInput> = z
        .object({
            akUUID: z.nullable(z.string()).optional(),
            weight: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.akUUID === undefined ? null : { akUUID: v.akUUID }),
                ...(v.weight === undefined ? null : { weight: v.weight }),
            };
        });
}
