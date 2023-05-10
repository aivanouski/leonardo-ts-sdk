/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as utils from "../internal/utils";
import * as operations from "./models/operations";
import { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

export class Model {
  _defaultClient: AxiosInstance;
  _securityClient: AxiosInstance;
  _serverURL: string;
  _language: string;
  _sdkVersion: string;
  _genVersion: string;

  constructor(
    defaultClient: AxiosInstance,
    securityClient: AxiosInstance,
    serverURL: string,
    language: string,
    sdkVersion: string,
    genVersion: string
  ) {
    this._defaultClient = defaultClient;
    this._securityClient = securityClient;
    this._serverURL = serverURL;
    this._language = language;
    this._sdkVersion = sdkVersion;
    this._genVersion = genVersion;
  }

  /**
   * Train a Custom Model
   *
   * @remarks
   * This endpoint will train a new custom model
   */
  async createModel(
    req: operations.CreateModelRequestBody,
    config?: AxiosRequestConfig
  ): Promise<operations.CreateModelResponse> {
    if (!(req instanceof utils.SpeakeasyBase)) {
      req = new operations.CreateModelRequestBody(req);
    }

    const baseURL: string = this._serverURL;
    const url: string = baseURL.replace(/\/$/, "") + "/models";

    let [reqBodyHeaders, reqBody]: [object, any] = [{}, {}];

    try {
      [reqBodyHeaders, reqBody] = utils.serializeRequestBody(
        req,
        "request",
        "json"
      );
    } catch (e: unknown) {
      if (e instanceof Error) {
        throw new Error(`Error serializing request body, cause: ${e.message}`);
      }
    }

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const headers = { ...reqBodyHeaders, ...config?.headers };
    if (reqBody == null || Object.keys(reqBody).length === 0)
      throw new Error("request body is required");

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "post",
      headers: headers,
      data: reqBody,
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.CreateModelResponse =
      new operations.CreateModelResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.createModel200ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.CreateModel200ApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Delete a Single Custom Model by ID
   *
   * @remarks
   * This endpoint will delete a specific custom model
   */
  async deleteModelById(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<operations.DeleteModelByIdResponse> {
    const req = new operations.DeleteModelByIdRequest({
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/models/{id}", req);

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "delete",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.DeleteModelByIdResponse =
      new operations.DeleteModelByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.deleteModelById200ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.DeleteModelById200ApplicationJSON
          );
        }
        break;
    }

    return res;
  }

  /**
   * Get a Single Custom Model by ID
   *
   * @remarks
   * This endpoint gets the specific custom model
   */
  async getModelById(
    id: string,
    config?: AxiosRequestConfig
  ): Promise<operations.GetModelByIdResponse> {
    const req = new operations.GetModelByIdRequest({
      id: id,
    });
    const baseURL: string = this._serverURL;
    const url: string = utils.generateURL(baseURL, "/models/{id}", req);

    const client: AxiosInstance = this._securityClient || this._defaultClient;

    const httpRes: AxiosResponse = await client.request({
      validateStatus: () => true,
      url: url,
      method: "get",
      ...config,
    });

    const contentType: string = httpRes?.headers?.["content-type"] ?? "";

    if (httpRes?.status == null) {
      throw new Error(`status code not found in response: ${httpRes}`);
    }

    const res: operations.GetModelByIdResponse =
      new operations.GetModelByIdResponse({
        statusCode: httpRes.status,
        contentType: contentType,
        rawResponse: httpRes,
      });
    switch (true) {
      case httpRes?.status == 200:
        if (utils.matchContentType(contentType, `application/json`)) {
          res.getModelById200ApplicationJSONObject = utils.objectToClass(
            httpRes?.data,
            operations.GetModelById200ApplicationJSON
          );
        }
        break;
    }

    return res;
  }
}
