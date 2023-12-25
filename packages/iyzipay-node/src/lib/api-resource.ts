export class ApiResource {
  private rawResult: string;

  public getRawResult(): string {
    return this.rawResult;
  }

  public setRawResult(rawResult: string): void {
    this.rawResult = rawResult;
  }
}
