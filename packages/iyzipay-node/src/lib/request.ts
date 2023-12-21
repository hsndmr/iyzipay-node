import { BaseModel } from './base-model';
import { FlexibleData } from './flexible-data.interface';
import { RequestDataBuilder } from './request-data-builder';
import { RequestStringBuilder } from './request-string-builder';

export class Request extends BaseModel {
  private locale?: string;
  private conversationId?: string;

  public getLocale(): string | undefined {
    return this.locale;
  }

  public setLocale(value: string) {
    this.locale = value;
  }

  public getConversationId(): string | undefined {
    return this.conversationId;
  }

  public setConversationId(value: string) {
    this.conversationId = value;
  }

  public getRequestData(): FlexibleData {
    return RequestDataBuilder.create()
      .add('locale', this.getLocale())
      .add('conversationId', this.getConversationId())
      .get();
  }

  public toPKIRequestString(): string {
    return RequestStringBuilder.create()
      .append('locale', this.getLocale())
      .append('conversationId', this.getConversationId())
      .getRequestString();
  }
}
