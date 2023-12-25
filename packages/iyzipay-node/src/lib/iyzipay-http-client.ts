import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';
import { Options } from './options';

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
}
