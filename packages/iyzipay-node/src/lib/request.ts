import { BaseModel } from './base-model';
import { JsonBuilder } from './json-builder';
import { JsonObject } from './json-convertbile.interface';
import { RequestStringBuilder } from './request-string-builder';

export class Request extends BaseModel {
  private _locale?: string;
  private _conversationId?: string;

  public get locale(): string | undefined {
    return this._locale;
  }

  public set locale(value: string) {
    this._locale = value;
  }

  public get conversationId(): string | undefined {
    return this._conversationId;
  }

  public set conversationId(value: string) {
    this._conversationId = value;
  }

  public getJsonObject(): JsonObject {
    return JsonBuilder.create()
      .add('locale', this.locale)
      .add('conversationId', this.conversationId)
      .getObject();
  }

  public toPKIRequestString(): string {
    return RequestStringBuilder.create()
      .append('locale', this.locale)
      .append('conversationId', this.conversationId)
      .getRequestString();
  }
}
