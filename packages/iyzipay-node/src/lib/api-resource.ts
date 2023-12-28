import { ResponseData } from './response-data-manager';

export class ApiResource {
  private rawResult?: ResponseData;

  public getRawResult(): ResponseData | undefined {
    return this.rawResult;
  }

  public setRawResult(ResponseData?: ResponseData): void {
    this.rawResult = ResponseData;
  }
}
