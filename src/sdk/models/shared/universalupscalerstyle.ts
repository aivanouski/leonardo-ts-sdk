/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The style to upscale images using universal upscaler with.
 */
export enum UniversalUpscalerStyle {
    General = "GENERAL",
    Cinematic = "CINEMATIC",
    TwoDARTAndILLUSTRATION = "2D ART & ILLUSTRATION",
    CGARTAndGAMEASSETS = "CG ART & GAME ASSETS",
}

/** @internal */
export const UniversalUpscalerStyle$: z.ZodNativeEnum<typeof UniversalUpscalerStyle> =
    z.nativeEnum(UniversalUpscalerStyle);
