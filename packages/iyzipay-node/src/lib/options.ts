export class Options {
  private _apiKey: string;
  private _secretKey: string;
  private _baseUrl: string;

  public get apiKey(): string {
    return this._apiKey;
  }

  public set apiKey(value: string) {
    this._apiKey = value;
  }

  public get secretKey(): string {
    return this._secretKey;
  }

  public set secretKey(value: string) {
    this._secretKey = value;
  }

  public get baseUrl(): string {
    return this._baseUrl;
  }

  public set baseUrl(value: string) {
    this._baseUrl = value;
  }
}
