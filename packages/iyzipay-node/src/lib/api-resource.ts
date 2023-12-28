import { ResponseData } from './response-data-manager';

export class ApiResource {
  private responseData?: ResponseData;

  public getResponseData(): ResponseData | undefined {
    return this.responseData;
  }

  public setResponseData(ResponseData?: ResponseData): void {
    this.responseData = ResponseData;
  }
}
