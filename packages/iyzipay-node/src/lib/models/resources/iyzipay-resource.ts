import { ApiResource } from '../../api-resource';
import { OptionalType } from '../../types';

export class IyzipayResource extends ApiResource {
  private status: OptionalType<string> = null;
  private errorCode: OptionalType<string> = null;
  private errorMessage: OptionalType<string> = null;
  private errorGroup?: OptionalType<string> = null;
  private locale: OptionalType<string> = null;
  private systemTime: OptionalType<number> = null;
  private conversationId: OptionalType<string> = null;

  public getStatus(): OptionalType<string> {
    return this.status;
  }

  public setStatus(status: OptionalType<string>): void {
    this.status = status;
  }

  public getErrorCode(): OptionalType<string> {
    return this.errorCode;
  }

  public setErrorCode(errorCode: OptionalType<string>): void {
    this.errorCode = errorCode;
  }

  public getErrorMessage(): OptionalType<string> {
    return this.errorMessage;
  }

  public setErrorMessage(errorMessage: OptionalType<string>): void {
    this.errorMessage = errorMessage;
  }

  public getErrorGroup(): OptionalType<string> {
    return this.errorGroup;
  }

  public setErrorGroup(errorGroup: OptionalType<string>): void {
    this.errorGroup = errorGroup;
  }

  public getLocale(): OptionalType<string> {
    return this.locale;
  }

  public setLocale(locale: OptionalType<string>): void {
    this.locale = locale;
  }

  public getSystemTime(): OptionalType<number> {
    return this.systemTime;
  }

  public setSystemTime(systemTime: OptionalType<number>): void {
    this.systemTime = systemTime;
  }

  public getConversationId(): OptionalType<string> {
    return this.conversationId;
  }

  public setConversationId(conversationId: OptionalType<string>): void {
    this.conversationId = conversationId;
  }
}
