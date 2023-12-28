/* eslint-disable @typescript-eslint/no-explicit-any */
import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Options } from './options';
import { HashGenerator } from './hash-generator';
import { Request } from './request';
import { IyziAuthV2Generator } from './iyzi-auth-v2-generator';
import { uniqid } from './utils';

export class IyzipayHttpClient {
  private axiosInstance: AxiosInstance;
  private options: Options;

  constructor(options: Options) {
    this.options = options;
    this.axiosInstance = axios.create({
      baseURL: options.getBaseUrl(),
    });
  }

  public setOptions(options: Options) {
    this.options = options;
    this.axiosInstance.defaults.baseURL = options.getBaseUrl();
  }

  public getOptions(): Options {
    return this.options;
  }

  public get<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.axiosInstance.get<T, R, D>(url, config);
  }

  public async post<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.axiosInstance.post<T, R, D>(url, data, config);
  }

  public async put<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    data: any,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.axiosInstance.put<T, R, D>(url, data, config);
  }

  public async delete<T = any, R = AxiosResponse<T>, D = any>(
    url: string,
    config?: AxiosRequestConfig<D>
  ): Promise<R> {
    return this.axiosInstance.delete<T, R, D>(url, config);
  }

  getHttpHeaders(request: Request): {
    Accept: string;
    'Content-type': string;
    Authorization: string;
    'x-iyzi-rnd': string;
  } {
    const rnd = uniqid();

    return {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: this.prepareAuthorizationString(request, rnd),
      'x-iyzi-rnd': rnd,
    };
  }

  getHttpHeadersV2(
    uri: string,
    request: Request
  ): {
    Accept: string;
    'Content-type': string;
    Authorization: string;
  } {
    const rnd = uniqid();

    return {
      Accept: 'application/json',
      'Content-type': 'application/json',
      Authorization: this.prepareAuthorizationStringV2(uri, request, rnd),
    };
  }

  prepareAuthorizationString(request: Request, rnd: string): string {
    const authContent = HashGenerator.generateHash(
      this.options.getApiKey(),
      this.options.getSecretKey(),
      rnd,
      request
    );

    return `IYZWS ${this.options.getApiKey()}:${authContent}`;
  }

  prepareAuthorizationStringV2(
    uri: string,
    request: Request | null,
    rnd: string
  ): string {
    const hash = IyziAuthV2Generator.generateAuthContent(
      uri,
      this.options.getApiKey(),
      this.options.getSecretKey(),
      rnd,
      request
    );

    return `IYZWSv2 ${hash}`;
  }
}
