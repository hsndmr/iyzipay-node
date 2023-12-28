export type ResponseData = {
  [key: string]: any;
};

export class ResponseDataManager {
  private data: ResponseData;

  constructor(data: ResponseData) {
    this.data = data;
  }

  public getData(): ResponseData {
    return this.data;
  }

  public setData(data: ResponseData): void {
    this.data = data;
  }

  public get<T>(key: string): T | undefined {
    return this.data[key] ?? undefined;
  }
}
