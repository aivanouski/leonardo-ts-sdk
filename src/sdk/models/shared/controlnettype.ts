/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * The type of ControlNet to use.
 */
export enum ControlnetType {
    Pose = "POSE",
    Canny = "CANNY",
    Depth = "DEPTH",
}

/** @internal */
export namespace ControlnetType$ {
    export const inboundSchema = z.nativeEnum(ControlnetType);
    export const outboundSchema = inboundSchema;
}
