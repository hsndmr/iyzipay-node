import { Request } from './request';
import { RequestFormatter } from './request-formatter';
import {
  RequestStringConvertible,
  isRequestStringConvertible,
} from './request-string-convertible.interface';
import { isNotNullOrUndefined } from './utils';

type Value =
  | string
  | RequestStringConvertible
  | null
  | boolean
  | number
  | undefined;

export class RequestStringBuilder {
  private requestString: string;

  constructor(requestString: string) {
    this.requestString = requestString;
  }

  public static create(): RequestStringBuilder {
    return new RequestStringBuilder('');
  }

  public appendSuper(superRequestString?: string | null): this {
    if (isNotNullOrUndefined(superRequestString)) {
      superRequestString = superRequestString.substring(
        1,
        superRequestString.length - 1
      );

      if (superRequestString.length > 0) {
        this.requestString += superRequestString + ',';
      }
    }

    return this;
  }

  public append(
    key: string,
    value?: string | RequestStringConvertible | null | boolean | number
  ): this {
    if (isNotNullOrUndefined(value)) {
      const formattedValue = this.serializeForPKIRequest(value);

      this.appendKeyValue(key, formattedValue);
    }

    return this;
  }

  public appendPrice(key: string, value?: string | null): this {
    if (isNotNullOrUndefined(value)) {
      this.appendKeyValue(key, RequestFormatter.formatPrice(value));
    }

    return this;
  }

  public appendArray(key: string, array: Value[]): this {
    let appendedValue = '';
    array.forEach((value) => {
      if (value !== null) {
        appendedValue += this.serializeForPKIRequest(value);

        appendedValue += ', ';
      }
    });

    this.appendKeyValueArray(key, appendedValue);

    return this;
  }

  private appendKeyValue(key: string, value: string): this {
    this.requestString += `${key}=${value},`;
    return this;
  }

  private appendKeyValueArray(key: string, value: string): this {
    value = value.substring(0, value.length - 2);
    this.requestString += `${key}=[${value}],`;

    return this;
  }

  private appendPrefix(): this {
    this.requestString = `[${this.requestString}]`;

    return this;
  }

  private removeTrailingComma(): this {
    this.requestString = this.requestString.substring(
      0,
      this.requestString.length - 1
    );

    return this;
  }

  public getRequestString(): string {
    this.removeTrailingComma();
    this.appendPrefix();

    return this.requestString;
  }

  protected serializeForPKIRequest(value: Value): string {
    return isRequestStringConvertible(value)
      ? (value as RequestStringConvertible).toPKIRequestString()
      : (value as Exclude<Value, RequestStringConvertible>).toString();
  }

  // TODO: This method is not finished yet. It should be completed.
  public static requestToStringQuery(
    request: Request,
    type?: string | null
  ): string | false {
    let stringQuery = '';

    stringQuery += request.getConversationId()
      ? `?conversationId=${request.getConversationId()}`
      : '';
    stringQuery += request.getLocale() ? `&locale=${request.getLocale()}` : '';

    switch (type) {
      case 'defaultParams':
        if (request.getConversationId()) {
          stringQuery = `?conversationId=${request.getConversationId()}`;
          stringQuery += request.getLocale()
            ? `&locale=${request.getLocale()}`
            : '';
        } else {
          stringQuery += request.getLocale()
            ? `&locale=${request.getLocale()}`
            : '';
        }

        break;
    }

    return stringQuery !== '' ? stringQuery : false;
  }
}
