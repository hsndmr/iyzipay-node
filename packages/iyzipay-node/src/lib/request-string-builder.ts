import { Request } from './request';
import { RequestFormatter } from './request-formatter';
import {
  RequestStringConvertible,
  isRequestStringConvertible,
} from './request-string-convertible.interface';
import { isNotNullOrUndefined } from './utils';

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
    value?: string | RequestStringConvertible | null
  ): this {
    if (isNotNullOrUndefined(value)) {
      const formattedValue = isRequestStringConvertible(value)
        ? (value as RequestStringConvertible).toPKIRequestString()
        : (value as string);

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

  public appendArray(
    key: string,
    array?: (RequestStringConvertible | null)[]
  ): this {
    if (isNotNullOrUndefined(array)) {
      let appendedValue = '';
      array.forEach((value) => {
        appendedValue += isRequestStringConvertible(value)
          ? value.toPKIRequestString()
          : value;

        appendedValue += ', ';
      });

      this.appendKeyValueArray(key, appendedValue);
    }

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

  // TODO: This method is not finished yet. It should be completed.
  public static requestToStringQuery(
    request: Request,
    type?: string | null
  ): string | false {
    let stringQuery = '';

    stringQuery += request.conversationId
      ? `?conversationId=${request.conversationId}`
      : '';
    stringQuery += request.locale ? `&locale=${request.locale}` : '';

    switch (type) {
      case 'defaultParams':
        if (request.conversationId) {
          stringQuery = `?conversationId=${request.conversationId}`;
          stringQuery += request.locale ? `&locale=${request.locale}` : '';
        } else {
          stringQuery += request.locale ? `&locale=${request.locale}` : '';
        }

        break;
    }

    return stringQuery !== '' ? stringQuery : false;
  }
}
