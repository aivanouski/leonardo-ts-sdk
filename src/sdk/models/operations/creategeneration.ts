/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SpeakeasyBase, SpeakeasyMetadata } from "../../../internal/utils";
import * as shared from "../../../sdk/models/shared";
import { AxiosResponse } from "axios";
import { Expose, Type } from "class-transformer";

/**
 * Query parameters to be provided in the request body as a JSON object
 */
export class CreateGenerationRequestBody extends SpeakeasyBase {
    /**
     * Enable to use Alchemy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "alchemy" })
    alchemy?: boolean;

    /**
     * Contrast Ratio to use with Alchemy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "contrastRatio" })
    contrastRatio?: number;

    /**
     * Enable to use ControlNet. Requires an init image to be provided. Requires a model based on SD v1.5
     */
    @SpeakeasyMetadata()
    @Expose({ name: "controlNet" })
    controlNet?: boolean;

    /**
     * The type of ControlNet to use.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "controlNetType" })
    controlNetType?: shared.ControlnetType;

    @SpeakeasyMetadata({ elemType: shared.ElementInput })
    @Expose({ name: "elements" })
    @Type(() => shared.ElementInput)
    elements?: shared.ElementInput[];

    /**
     * Enable to use the Expanded Domain feature of Alchemy.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "expandedDomain" })
    expandedDomain?: boolean;

    /**
     * How strongly the generation should reflect the prompt. 7 is recommended. Must be between 1 and 20.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "guidance_scale" })
    guidanceScale?: number;

    /**
     * The input height of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "height" })
    height?: number;

    /**
     * Enable to use the High Contrast feature of Prompt Magic. Note: Controls RAW mode. Set to false to enable RAW mode.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "highContrast" })
    highContrast?: boolean;

    /**
     * Enable to use the High Resolution feature of Prompt Magic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "highResolution" })
    highResolution?: boolean;

    @SpeakeasyMetadata()
    @Expose({ name: "imagePromptWeight" })
    imagePromptWeight?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "imagePrompts" })
    imagePrompts?: string[];

    /**
     * The ID of an existing image to use in image2image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "init_generation_image_id" })
    initGenerationImageId?: string;

    /**
     * The ID of an Init Image to use in image2image.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "init_image_id" })
    initImageId?: string;

    /**
     * How strongly the generated images should reflect the original image in image2image. Must be a float between 0.1 and 0.9.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "init_strength" })
    initStrength?: number;

    /**
     * The model ID used for image generation. If not provided, uses sd_version to determine the version of Stable Diffusion to use. In-app, model IDs are under the Finetune Models menu. Click on the platform model or your custom model, then click View More. For platform models, you can also use the List Platform Models API.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "modelId" })
    modelId?: string;

    /**
     * The negative prompt used for the image generation
     */
    @SpeakeasyMetadata()
    @Expose({ name: "negative_prompt" })
    negativePrompt?: string;

    /**
     * Not Safe For Work Flag.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "nsfw" })
    nsfw?: boolean;

    /**
     * The number of images to generate. Must be between 1 and 8. If either width or height is over 768, must be between 1 and 4.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_images" })
    numImages?: number;

    /**
     * The number of inference steps to use for the generation. Must be between 30 and 60.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "num_inference_steps" })
    numInferenceSteps?: number;

    /**
     * Enable the photoReal feature. Requires enabling alchemy and unspecifying modelId.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photoReal" })
    photoReal?: boolean;

    /**
     * Depth of field of photoReal. Must be 0.55 for low, 0.5 for medium, or 0.45 for high. Defaults to 0.55 if not specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "photoRealStrength" })
    photoRealStrength?: number;

    /**
     * The style to generate images with. When photoReal is enabled, use CINEMATIC, CREATIVE, VIBRANT, or NONE. When alchemy is disabled, use LEONARDO or NONE. When alchemy is enabled, use ANIME, CREATIVE, DYNAMIC, ENVIRONMENT, GENERAL, ILLUSTRATION, PHOTOGRAPHY, RAYTRACED, RENDER_3D, SKETCH_BW, SKETCH_COLOR, or NONE.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "presetStyle" })
    presetStyle?: shared.SdGenerationStyle;

    /**
     * The prompt used to generate images
     */
    @SpeakeasyMetadata()
    @Expose({ name: "prompt" })
    prompt: string;

    /**
     * Enable to use Prompt Magic.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagic" })
    promptMagic?: boolean;

    /**
     * Strength of prompt magic. Must be a float between 0.1 and 1.0
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagicStrength" })
    promptMagicStrength?: number;

    /**
     * Prompt magic version v2 or v3, for use when promptMagic: true
     */
    @SpeakeasyMetadata()
    @Expose({ name: "promptMagicVersion" })
    promptMagicVersion?: string;

    /**
     * Whether the generated images should show in the community feed.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "public" })
    public?: boolean;

    /**
     * The scheduler to generate images with. Defaults to EULER_DISCRETE if not specified.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "scheduler" })
    scheduler?: shared.SdGenerationSchedulers;

    /**
     * The base version of stable diffusion to use if not using a custom model. v1_5 is 1.5, v2 is 2.1, if not specified it will default to v1_5.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "sd_version" })
    sdVersion?: shared.SdVersions;

    @SpeakeasyMetadata()
    @Expose({ name: "seed" })
    seed?: number;

    /**
     * Whether the generated images should tile on all axis.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "tiling" })
    tiling?: boolean;

    /**
     * Whether the generated images should be unzoomed (requires unzoomAmount and init_image_id to be set).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unzoom" })
    unzoom?: boolean;

    /**
     * How much the image should be unzoomed (requires an init_image_id and unzoom to be set to true).
     */
    @SpeakeasyMetadata()
    @Expose({ name: "unzoomAmount" })
    unzoomAmount?: number;

    /**
     * How much the image should be upscaled. (Enterprise Only)
     */
    @SpeakeasyMetadata()
    @Expose({ name: "upscaleRatio" })
    upscaleRatio?: number;

    /**
     * How much weighting to use for generation.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "weighting" })
    weighting?: number;

    /**
     * The input width of the images. Must be between 32 and 1024 and be a multiple of 8. Note: Input resolution is not always the same as output resolution due to upscaling from other features.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "width" })
    width?: number;
}

export class SDGenerationOutput extends SpeakeasyBase {
    /**
     * API Credits Cost for Image Generation. Available for Production API Users.
     */
    @SpeakeasyMetadata()
    @Expose({ name: "apiCreditCost" })
    apiCreditCost?: number;

    @SpeakeasyMetadata()
    @Expose({ name: "generationId" })
    generationId?: string;
}

/**
 * Responses for POST /generations
 */
export class CreateGenerationResponseBody extends SpeakeasyBase {
    @SpeakeasyMetadata()
    @Expose({ name: "sdGenerationJob" })
    @Type(() => SDGenerationOutput)
    sdGenerationJob?: SDGenerationOutput;
}

export class CreateGenerationResponse extends SpeakeasyBase {
    /**
     * HTTP response content type for this operation
     */
    @SpeakeasyMetadata()
    contentType: string;

    /**
     * HTTP response status code for this operation
     */
    @SpeakeasyMetadata()
    statusCode: number;

    /**
     * Raw HTTP response; suitable for custom response parsing
     */
    @SpeakeasyMetadata()
    rawResponse: AxiosResponse;

    /**
     * Responses for POST /generations
     */
    @SpeakeasyMetadata()
    object?: CreateGenerationResponseBody;
}
