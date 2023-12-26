import { ApiResource } from './api-resource';

export class IyzipayResource extends ApiResource {
  private status: string;
  private errorCode: string;
  private errorMessage: string;
  private errorGroup: string;
  private locale: string;
  private systemTime: number;
  private conversationId: string;

  public getStatus(): string {
    return this.status;
  }

  public setStatus(status: string): void {
    this.status = status;
  }

  public getErrorCode(): string {
    return this.errorCode;
  }

  public setErrorCode(errorCode: string): void {
    this.errorCode = errorCode;
  }

  public getErrorMessage(): string {
    return this.errorMessage;
  }

  public setErrorMessage(errorMessage: string): void {
    this.errorMessage = errorMessage;
  }

  public getErrorGroup(): string {
    return this.errorGroup;
  }

  public setErrorGroup(errorGroup: string): void {
    this.errorGroup = errorGroup;
  }

  public getLocale(): string {
    return this.locale;
  }

  public setLocale(locale: string): void {
    this.locale = locale;
  }

  public getSystemTime(): number {
    return this.systemTime;
  }

  public setSystemTime(systemTime: number): void {
    this.systemTime = systemTime;
  }

  public getConversationId(): string {
    return this.conversationId;
  }

  public setConversationId(conversationId: string): void {
    this.conversationId = conversationId;
  }
}
