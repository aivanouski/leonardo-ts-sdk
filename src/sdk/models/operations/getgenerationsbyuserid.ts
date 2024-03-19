/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as shared from "../shared";
import * as z from "zod";

export type GetGenerationsByUserIdRequest = {
    userId: string;
    limit?: number | undefined;
    offset?: number | undefined;
};

/**
 * columns and relationships of "generated_image_variation_generic"
 */
export type GetGenerationsByUserIdGeneratedImageVariationGeneric = {
    id?: string | null | undefined;
    /**
     * The status of the current task.
     */
    status?: shared.JobStatus | undefined;
    /**
     * The type of variation.
     */
    transformType?: shared.VariationType | undefined;
    url?: string | null | undefined;
};

/**
 * columns and relationships of "generated_images"
 */
export type GetGenerationsByUserIdGeneratedImages = {
    generatedImageVariationGenerics?:
        | Array<GetGenerationsByUserIdGeneratedImageVariationGeneric>
        | undefined;
    id?: string | null | undefined;
    /**
     * If it is an image to video generation.
     */
    imageToVideo?: boolean | null | undefined;
    likeCount?: number | undefined;
    /**
     * If generation is of motion type.
     */
    motion?: boolean | null | undefined;
    /**
     * The URL of the motion MP4.
     */
    motionMp4URL?: string | null | undefined;
    /**
     * The name of the motion model.
     */
    motionModel?: string | null | undefined;
    /**
     * The motion strength.
     */
    motionStrength?: number | null | undefined;
    nsfw?: boolean | undefined;
    url?: string | undefined;
};

/**
 * Element used for the generation.
 */
export type Elements = {
    /**
     * Unique identifier for the element. Elements can be found from the List Elements endpoint.
     */
    akUUID?: string | null | undefined;
    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    baseModel?: shared.SdVersions | undefined;
    /**
     * Description for the element
     */
    description?: string | null | undefined;
    /**
     * Name of the element
     */
    name?: string | null | undefined;
    /**
     * URL of the element image
     */
    urlImage?: string | null | undefined;
    /**
     * Default weight for the element
     */
    weightDefault?: number | null | undefined;
    /**
     * Maximum weight for the element
     */
    weightMax?: number | null | undefined;
    /**
     * Minimum weight for the element
     */
    weightMin?: number | null | undefined;
};

/**
 * This table captures the elements that are applied to a Generations, also the order and weightings used when applied.
 */
export type GetGenerationsByUserIdGenerationElements = {
    id?: number | null | undefined;
    /**
     * Element used for the generation.
     */
    lora?: Elements | null | undefined;
    weightApplied?: number | null | undefined;
};

/**
 * columns and relationships of "generations"
 */
export type GetGenerationsByUserIdGenerations = {
    createdAt?: string | undefined;
    generatedImages?: Array<GetGenerationsByUserIdGeneratedImages> | undefined;
    generationElements?: Array<GetGenerationsByUserIdGenerationElements> | undefined;
    guidanceScale?: number | null | undefined;
    id?: string | null | undefined;
    imageHeight?: number | undefined;
    imageWidth?: number | undefined;
    inferenceSteps?: number | null | undefined;
    initStrength?: number | null | undefined;
    modelId?: string | null | undefined;
    negativePrompt?: string | null | undefined;
    /**
     * If photoReal feature was used.
     */
    photoReal?: boolean | null | undefined;
    /**
     * Depth of field of photoReal used. 0.55 is low, 0.5 is medium, and 0.45 is high. Default is 0.55.
     */
    photoRealStrength?: number | null | undefined;
    /**
     * The style to generate images with. When photoReal is enabled, use CINEMATIC, CREATIVE, VIBRANT, or NONE. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.
     */
    presetStyle?: shared.SdGenerationStyle | undefined;
    prompt?: string | undefined;
    /**
     * If prompt magic was used.
     */
    promptMagic?: boolean | null | undefined;
    /**
     * Strength of prompt magic used.
     */
    promptMagicStrength?: number | null | undefined;
    /**
     * Version of prompt magic used.
     */
    promptMagicVersion?: string | null | undefined;
    public?: boolean | undefined;
    /**
     * The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.
     */
    scheduler?: shared.SdGenerationSchedulers | undefined;
    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    sdVersion?: shared.SdVersions | undefined;
    seed?: number | null | undefined;
    /**
     * The status of the current task.
     */
    status?: shared.JobStatus | undefined;
};

/**
 * Responses for GET /generations/user/{userId}
 */
export type GetGenerationsByUserIdResponseBody = {
    generations?: Array<GetGenerationsByUserIdGenerations> | undefined;
};

export type GetGenerationsByUserIdResponse = {
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
     * Responses for GET /generations/user/{userId}
     */
    object?: GetGenerationsByUserIdResponseBody | undefined;
};

/** @internal */
export namespace GetGenerationsByUserIdRequest$ {
    export type Inbound = {
        userId: string;
        limit?: number | undefined;
        offset?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetGenerationsByUserIdRequest, z.ZodTypeDef, Inbound> = z
        .object({
            userId: z.string(),
            limit: z.number().int().default(10),
            offset: z.number().int().default(0),
        })
        .transform((v) => {
            return {
                userId: v.userId,
                limit: v.limit,
                offset: v.offset,
            };
        });

    export type Outbound = {
        userId: string;
        limit: number;
        offset: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGenerationsByUserIdRequest> =
        z
            .object({
                userId: z.string(),
                limit: z.number().int().default(10),
                offset: z.number().int().default(0),
            })
            .transform((v) => {
                return {
                    userId: v.userId,
                    limit: v.limit,
                    offset: v.offset,
                };
            });
}

/** @internal */
export namespace GetGenerationsByUserIdGeneratedImageVariationGeneric$ {
    export type Inbound = {
        id?: string | null | undefined;
        status?: shared.JobStatus | undefined;
        transformType?: shared.VariationType | undefined;
        url?: string | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetGenerationsByUserIdGeneratedImageVariationGeneric,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
            status: shared.JobStatus$.optional(),
            transformType: shared.VariationType$.optional(),
            url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transformType === undefined ? null : { transformType: v.transformType }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        id?: string | null | undefined;
        status?: shared.JobStatus | undefined;
        transformType?: shared.VariationType | undefined;
        url?: string | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetGenerationsByUserIdGeneratedImageVariationGeneric
    > = z
        .object({
            id: z.nullable(z.string()).optional(),
            status: shared.JobStatus$.optional(),
            transformType: shared.VariationType$.optional(),
            url: z.nullable(z.string()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.status === undefined ? null : { status: v.status }),
                ...(v.transformType === undefined ? null : { transformType: v.transformType }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}

/** @internal */
export namespace GetGenerationsByUserIdGeneratedImages$ {
    export type Inbound = {
        generated_image_variation_generics?:
            | Array<GetGenerationsByUserIdGeneratedImageVariationGeneric$.Inbound>
            | undefined;
        id?: string | null | undefined;
        imageToVideo?: boolean | null | undefined;
        likeCount?: number | undefined;
        motion?: boolean | null | undefined;
        motionMP4URL?: string | null | undefined;
        motionModel?: string | null | undefined;
        motionStrength?: number | null | undefined;
        nsfw?: boolean | undefined;
        url?: string | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetGenerationsByUserIdGeneratedImages,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            generated_image_variation_generics: z
                .array(
                    z.lazy(
                        () => GetGenerationsByUserIdGeneratedImageVariationGeneric$.inboundSchema
                    )
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            imageToVideo: z.nullable(z.boolean()).optional(),
            likeCount: z.number().int().optional(),
            motion: z.nullable(z.boolean()).optional(),
            motionMP4URL: z.nullable(z.string()).optional(),
            motionModel: z.nullable(z.string()).optional(),
            motionStrength: z.nullable(z.number().int()).optional(),
            nsfw: z.boolean().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.generated_image_variation_generics === undefined
                    ? null
                    : { generatedImageVariationGenerics: v.generated_image_variation_generics }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.imageToVideo === undefined ? null : { imageToVideo: v.imageToVideo }),
                ...(v.likeCount === undefined ? null : { likeCount: v.likeCount }),
                ...(v.motion === undefined ? null : { motion: v.motion }),
                ...(v.motionMP4URL === undefined ? null : { motionMp4URL: v.motionMP4URL }),
                ...(v.motionModel === undefined ? null : { motionModel: v.motionModel }),
                ...(v.motionStrength === undefined ? null : { motionStrength: v.motionStrength }),
                ...(v.nsfw === undefined ? null : { nsfw: v.nsfw }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });

    export type Outbound = {
        generated_image_variation_generics?:
            | Array<GetGenerationsByUserIdGeneratedImageVariationGeneric$.Outbound>
            | undefined;
        id?: string | null | undefined;
        imageToVideo?: boolean | null | undefined;
        likeCount?: number | undefined;
        motion?: boolean | null | undefined;
        motionMP4URL?: string | null | undefined;
        motionModel?: string | null | undefined;
        motionStrength?: number | null | undefined;
        nsfw?: boolean | undefined;
        url?: string | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetGenerationsByUserIdGeneratedImages
    > = z
        .object({
            generatedImageVariationGenerics: z
                .array(
                    z.lazy(
                        () => GetGenerationsByUserIdGeneratedImageVariationGeneric$.outboundSchema
                    )
                )
                .optional(),
            id: z.nullable(z.string()).optional(),
            imageToVideo: z.nullable(z.boolean()).optional(),
            likeCount: z.number().int().optional(),
            motion: z.nullable(z.boolean()).optional(),
            motionMp4URL: z.nullable(z.string()).optional(),
            motionModel: z.nullable(z.string()).optional(),
            motionStrength: z.nullable(z.number().int()).optional(),
            nsfw: z.boolean().optional(),
            url: z.string().optional(),
        })
        .transform((v) => {
            return {
                ...(v.generatedImageVariationGenerics === undefined
                    ? null
                    : { generated_image_variation_generics: v.generatedImageVariationGenerics }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.imageToVideo === undefined ? null : { imageToVideo: v.imageToVideo }),
                ...(v.likeCount === undefined ? null : { likeCount: v.likeCount }),
                ...(v.motion === undefined ? null : { motion: v.motion }),
                ...(v.motionMp4URL === undefined ? null : { motionMP4URL: v.motionMp4URL }),
                ...(v.motionModel === undefined ? null : { motionModel: v.motionModel }),
                ...(v.motionStrength === undefined ? null : { motionStrength: v.motionStrength }),
                ...(v.nsfw === undefined ? null : { nsfw: v.nsfw }),
                ...(v.url === undefined ? null : { url: v.url }),
            };
        });
}

/** @internal */
export namespace Elements$ {
    export type Inbound = {
        akUUID?: string | null | undefined;
        baseModel?: shared.SdVersions | undefined;
        description?: string | null | undefined;
        name?: string | null | undefined;
        urlImage?: string | null | undefined;
        weightDefault?: number | null | undefined;
        weightMax?: number | null | undefined;
        weightMin?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<Elements, z.ZodTypeDef, Inbound> = z
        .object({
            akUUID: z.nullable(z.string()).optional(),
            baseModel: shared.SdVersions$.optional(),
            description: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            urlImage: z.nullable(z.string()).optional(),
            weightDefault: z.nullable(z.number().int()).optional(),
            weightMax: z.nullable(z.number().int()).optional(),
            weightMin: z.nullable(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.akUUID === undefined ? null : { akUUID: v.akUUID }),
                ...(v.baseModel === undefined ? null : { baseModel: v.baseModel }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.urlImage === undefined ? null : { urlImage: v.urlImage }),
                ...(v.weightDefault === undefined ? null : { weightDefault: v.weightDefault }),
                ...(v.weightMax === undefined ? null : { weightMax: v.weightMax }),
                ...(v.weightMin === undefined ? null : { weightMin: v.weightMin }),
            };
        });

    export type Outbound = {
        akUUID?: string | null | undefined;
        baseModel?: shared.SdVersions | undefined;
        description?: string | null | undefined;
        name?: string | null | undefined;
        urlImage?: string | null | undefined;
        weightDefault?: number | null | undefined;
        weightMax?: number | null | undefined;
        weightMin?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Elements> = z
        .object({
            akUUID: z.nullable(z.string()).optional(),
            baseModel: shared.SdVersions$.optional(),
            description: z.nullable(z.string()).optional(),
            name: z.nullable(z.string()).optional(),
            urlImage: z.nullable(z.string()).optional(),
            weightDefault: z.nullable(z.number().int()).optional(),
            weightMax: z.nullable(z.number().int()).optional(),
            weightMin: z.nullable(z.number().int()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.akUUID === undefined ? null : { akUUID: v.akUUID }),
                ...(v.baseModel === undefined ? null : { baseModel: v.baseModel }),
                ...(v.description === undefined ? null : { description: v.description }),
                ...(v.name === undefined ? null : { name: v.name }),
                ...(v.urlImage === undefined ? null : { urlImage: v.urlImage }),
                ...(v.weightDefault === undefined ? null : { weightDefault: v.weightDefault }),
                ...(v.weightMax === undefined ? null : { weightMax: v.weightMax }),
                ...(v.weightMin === undefined ? null : { weightMin: v.weightMin }),
            };
        });
}

/** @internal */
export namespace GetGenerationsByUserIdGenerationElements$ {
    export type Inbound = {
        id?: number | null | undefined;
        lora?: Elements$.Inbound | null | undefined;
        weightApplied?: number | null | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetGenerationsByUserIdGenerationElements,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            id: z.nullable(z.number().int()).optional(),
            lora: z.nullable(z.lazy(() => Elements$.inboundSchema)).optional(),
            weightApplied: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.lora === undefined ? null : { lora: v.lora }),
                ...(v.weightApplied === undefined ? null : { weightApplied: v.weightApplied }),
            };
        });

    export type Outbound = {
        id?: number | null | undefined;
        lora?: Elements$.Outbound | null | undefined;
        weightApplied?: number | null | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetGenerationsByUserIdGenerationElements
    > = z
        .object({
            id: z.nullable(z.number().int()).optional(),
            lora: z.nullable(z.lazy(() => Elements$.outboundSchema)).optional(),
            weightApplied: z.nullable(z.number()).optional(),
        })
        .transform((v) => {
            return {
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.lora === undefined ? null : { lora: v.lora }),
                ...(v.weightApplied === undefined ? null : { weightApplied: v.weightApplied }),
            };
        });
}

/** @internal */
export namespace GetGenerationsByUserIdGenerations$ {
    export type Inbound = {
        createdAt?: string | undefined;
        generated_images?: Array<GetGenerationsByUserIdGeneratedImages$.Inbound> | undefined;
        generation_elements?: Array<GetGenerationsByUserIdGenerationElements$.Inbound> | undefined;
        guidanceScale?: number | null | undefined;
        id?: string | null | undefined;
        imageHeight?: number | undefined;
        imageWidth?: number | undefined;
        inferenceSteps?: number | null | undefined;
        initStrength?: number | null | undefined;
        modelId?: string | null | undefined;
        negativePrompt?: string | null | undefined;
        photoReal?: boolean | null | undefined;
        photoRealStrength?: number | null | undefined;
        presetStyle?: shared.SdGenerationStyle | undefined;
        prompt?: string | undefined;
        promptMagic?: boolean | null | undefined;
        promptMagicStrength?: number | null | undefined;
        promptMagicVersion?: string | null | undefined;
        public?: boolean | undefined;
        scheduler?: shared.SdGenerationSchedulers | undefined;
        sdVersion?: shared.SdVersions | undefined;
        seed?: number | null | undefined;
        status?: shared.JobStatus | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetGenerationsByUserIdGenerations,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            createdAt: z.string().optional(),
            generated_images: z
                .array(z.lazy(() => GetGenerationsByUserIdGeneratedImages$.inboundSchema))
                .optional(),
            generation_elements: z
                .array(z.lazy(() => GetGenerationsByUserIdGenerationElements$.inboundSchema))
                .optional(),
            guidanceScale: z.nullable(z.number()).optional(),
            id: z.nullable(z.string()).optional(),
            imageHeight: z.number().int().optional(),
            imageWidth: z.number().int().optional(),
            inferenceSteps: z.nullable(z.number().int()).optional(),
            initStrength: z.nullable(z.number()).optional(),
            modelId: z.nullable(z.string()).optional(),
            negativePrompt: z.nullable(z.string()).optional(),
            photoReal: z.nullable(z.boolean()).optional(),
            photoRealStrength: z.nullable(z.number()).optional(),
            presetStyle: shared.SdGenerationStyle$.optional(),
            prompt: z.string().optional(),
            promptMagic: z.nullable(z.boolean()).optional(),
            promptMagicStrength: z.nullable(z.number()).optional(),
            promptMagicVersion: z.nullable(z.string()).optional(),
            public: z.boolean().optional(),
            scheduler: shared.SdGenerationSchedulers$.optional(),
            sdVersion: shared.SdVersions$.optional(),
            seed: z.nullable(z.number().int()).optional(),
            status: shared.JobStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.generated_images === undefined
                    ? null
                    : { generatedImages: v.generated_images }),
                ...(v.generation_elements === undefined
                    ? null
                    : { generationElements: v.generation_elements }),
                ...(v.guidanceScale === undefined ? null : { guidanceScale: v.guidanceScale }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.imageHeight === undefined ? null : { imageHeight: v.imageHeight }),
                ...(v.imageWidth === undefined ? null : { imageWidth: v.imageWidth }),
                ...(v.inferenceSteps === undefined ? null : { inferenceSteps: v.inferenceSteps }),
                ...(v.initStrength === undefined ? null : { initStrength: v.initStrength }),
                ...(v.modelId === undefined ? null : { modelId: v.modelId }),
                ...(v.negativePrompt === undefined ? null : { negativePrompt: v.negativePrompt }),
                ...(v.photoReal === undefined ? null : { photoReal: v.photoReal }),
                ...(v.photoRealStrength === undefined
                    ? null
                    : { photoRealStrength: v.photoRealStrength }),
                ...(v.presetStyle === undefined ? null : { presetStyle: v.presetStyle }),
                ...(v.prompt === undefined ? null : { prompt: v.prompt }),
                ...(v.promptMagic === undefined ? null : { promptMagic: v.promptMagic }),
                ...(v.promptMagicStrength === undefined
                    ? null
                    : { promptMagicStrength: v.promptMagicStrength }),
                ...(v.promptMagicVersion === undefined
                    ? null
                    : { promptMagicVersion: v.promptMagicVersion }),
                ...(v.public === undefined ? null : { public: v.public }),
                ...(v.scheduler === undefined ? null : { scheduler: v.scheduler }),
                ...(v.sdVersion === undefined ? null : { sdVersion: v.sdVersion }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });

    export type Outbound = {
        createdAt?: string | undefined;
        generated_images?: Array<GetGenerationsByUserIdGeneratedImages$.Outbound> | undefined;
        generation_elements?: Array<GetGenerationsByUserIdGenerationElements$.Outbound> | undefined;
        guidanceScale?: number | null | undefined;
        id?: string | null | undefined;
        imageHeight?: number | undefined;
        imageWidth?: number | undefined;
        inferenceSteps?: number | null | undefined;
        initStrength?: number | null | undefined;
        modelId?: string | null | undefined;
        negativePrompt?: string | null | undefined;
        photoReal?: boolean | null | undefined;
        photoRealStrength?: number | null | undefined;
        presetStyle?: shared.SdGenerationStyle | undefined;
        prompt?: string | undefined;
        promptMagic?: boolean | null | undefined;
        promptMagicStrength?: number | null | undefined;
        promptMagicVersion?: string | null | undefined;
        public?: boolean | undefined;
        scheduler?: shared.SdGenerationSchedulers | undefined;
        sdVersion?: shared.SdVersions | undefined;
        seed?: number | null | undefined;
        status?: shared.JobStatus | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetGenerationsByUserIdGenerations
    > = z
        .object({
            createdAt: z.string().optional(),
            generatedImages: z
                .array(z.lazy(() => GetGenerationsByUserIdGeneratedImages$.outboundSchema))
                .optional(),
            generationElements: z
                .array(z.lazy(() => GetGenerationsByUserIdGenerationElements$.outboundSchema))
                .optional(),
            guidanceScale: z.nullable(z.number()).optional(),
            id: z.nullable(z.string()).optional(),
            imageHeight: z.number().int().optional(),
            imageWidth: z.number().int().optional(),
            inferenceSteps: z.nullable(z.number().int()).optional(),
            initStrength: z.nullable(z.number()).optional(),
            modelId: z.nullable(z.string()).optional(),
            negativePrompt: z.nullable(z.string()).optional(),
            photoReal: z.nullable(z.boolean()).optional(),
            photoRealStrength: z.nullable(z.number()).optional(),
            presetStyle: shared.SdGenerationStyle$.optional(),
            prompt: z.string().optional(),
            promptMagic: z.nullable(z.boolean()).optional(),
            promptMagicStrength: z.nullable(z.number()).optional(),
            promptMagicVersion: z.nullable(z.string()).optional(),
            public: z.boolean().optional(),
            scheduler: shared.SdGenerationSchedulers$.optional(),
            sdVersion: shared.SdVersions$.optional(),
            seed: z.nullable(z.number().int()).optional(),
            status: shared.JobStatus$.optional(),
        })
        .transform((v) => {
            return {
                ...(v.createdAt === undefined ? null : { createdAt: v.createdAt }),
                ...(v.generatedImages === undefined
                    ? null
                    : { generated_images: v.generatedImages }),
                ...(v.generationElements === undefined
                    ? null
                    : { generation_elements: v.generationElements }),
                ...(v.guidanceScale === undefined ? null : { guidanceScale: v.guidanceScale }),
                ...(v.id === undefined ? null : { id: v.id }),
                ...(v.imageHeight === undefined ? null : { imageHeight: v.imageHeight }),
                ...(v.imageWidth === undefined ? null : { imageWidth: v.imageWidth }),
                ...(v.inferenceSteps === undefined ? null : { inferenceSteps: v.inferenceSteps }),
                ...(v.initStrength === undefined ? null : { initStrength: v.initStrength }),
                ...(v.modelId === undefined ? null : { modelId: v.modelId }),
                ...(v.negativePrompt === undefined ? null : { negativePrompt: v.negativePrompt }),
                ...(v.photoReal === undefined ? null : { photoReal: v.photoReal }),
                ...(v.photoRealStrength === undefined
                    ? null
                    : { photoRealStrength: v.photoRealStrength }),
                ...(v.presetStyle === undefined ? null : { presetStyle: v.presetStyle }),
                ...(v.prompt === undefined ? null : { prompt: v.prompt }),
                ...(v.promptMagic === undefined ? null : { promptMagic: v.promptMagic }),
                ...(v.promptMagicStrength === undefined
                    ? null
                    : { promptMagicStrength: v.promptMagicStrength }),
                ...(v.promptMagicVersion === undefined
                    ? null
                    : { promptMagicVersion: v.promptMagicVersion }),
                ...(v.public === undefined ? null : { public: v.public }),
                ...(v.scheduler === undefined ? null : { scheduler: v.scheduler }),
                ...(v.sdVersion === undefined ? null : { sdVersion: v.sdVersion }),
                ...(v.seed === undefined ? null : { seed: v.seed }),
                ...(v.status === undefined ? null : { status: v.status }),
            };
        });
}

/** @internal */
export namespace GetGenerationsByUserIdResponseBody$ {
    export type Inbound = {
        generations?: Array<GetGenerationsByUserIdGenerations$.Inbound> | undefined;
    };

    export const inboundSchema: z.ZodType<
        GetGenerationsByUserIdResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            generations: z
                .array(z.lazy(() => GetGenerationsByUserIdGenerations$.inboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.generations === undefined ? null : { generations: v.generations }),
            };
        });

    export type Outbound = {
        generations?: Array<GetGenerationsByUserIdGenerations$.Outbound> | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        GetGenerationsByUserIdResponseBody
    > = z
        .object({
            generations: z
                .array(z.lazy(() => GetGenerationsByUserIdGenerations$.outboundSchema))
                .optional(),
        })
        .transform((v) => {
            return {
                ...(v.generations === undefined ? null : { generations: v.generations }),
            };
        });
}

/** @internal */
export namespace GetGenerationsByUserIdResponse$ {
    export type Inbound = {
        ContentType: string;
        StatusCode: number;
        RawResponse: Response;
        object?: GetGenerationsByUserIdResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetGenerationsByUserIdResponse, z.ZodTypeDef, Inbound> = z
        .object({
            ContentType: z.string(),
            StatusCode: z.number().int(),
            RawResponse: z.instanceof(Response),
            object: z.lazy(() => GetGenerationsByUserIdResponseBody$.inboundSchema).optional(),
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
        object?: GetGenerationsByUserIdResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetGenerationsByUserIdResponse> =
        z
            .object({
                contentType: z.string(),
                statusCode: z.number().int(),
                rawResponse: z.instanceof(Response).transform(() => {
                    throw new Error("Response cannot be serialized");
                }),
                object: z.lazy(() => GetGenerationsByUserIdResponseBody$.outboundSchema).optional(),
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
