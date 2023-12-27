import { ApiResource } from '../../api-resource';

export class IyzipayResource extends ApiResource {
  private status?: string;
  private errorCode?: string;
  private errorMessage?: string;
  private errorGroup?: string;
  private locale?: string;
  private systemTime?: number;
  private conversationId?: string;

  public getStatus(): string | undefined {
    return this.status;
  }

  public setStatus(status?: string): void {
    this.status = status;
  }

  public getErrorCode(): string | undefined {
    return this.errorCode;
  }

  public setErrorCode(errorCode?: string): void {
    this.errorCode = errorCode;
  }

  public getErrorMessage(): string | undefined {
    return this.errorMessage;
  }

  public setErrorMessage(errorMessage?: string): void {
    this.errorMessage = errorMessage;
  }

  public getErrorGroup(): string | undefined {
    return this.errorGroup;
  }

  public setErrorGroup(errorGroup?: string): void {
    this.errorGroup = errorGroup;
  }

  public getLocale(): string | undefined {
    return this.locale;
  }

  public setLocale(locale?: string): void {
    this.locale = locale;
  }

  public getSystemTime(): number | undefined {
    return this.systemTime;
  }

  public setSystemTime(systemTime?: number): void {
    this.systemTime = systemTime;
  }

  public getConversationId(): string | undefined {
    return this.conversationId;
  }

  public setConversationId(conversationId?: string): void {
    this.conversationId = conversationId;
  }
}
