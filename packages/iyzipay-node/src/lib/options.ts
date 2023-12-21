export class Options {
  private apiKey: string;
  private secretKey: string;
  private baseUrl: string;

  public getApiKey(): string {
    return this.apiKey;
  }

  public setApiKey(value: string) {
    this.apiKey = value;
  }

  public getSecretKey(): string {
    return this.secretKey;
  }

  public setSecretKey(value: string) {
    this.secretKey = value;
  }

  public getBaseUrl(): string {
    return this.baseUrl;
  }

  public setBaseUrl(value: string) {
    this.baseUrl = value;
  }
}
