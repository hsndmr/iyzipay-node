export type ResponseData = {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
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
