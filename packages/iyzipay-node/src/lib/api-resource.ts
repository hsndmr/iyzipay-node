export class ApiResource {
  private rawResult?: string;

  public getRawResult(): string | undefined {
    return this.rawResult;
  }

  public setRawResult(rawResult?: string): void {
    this.rawResult = rawResult;
  }
}
