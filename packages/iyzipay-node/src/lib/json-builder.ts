import { JsonObject, isJsonConvertible } from './json-convertbile.interface';
import { RequestFormatter } from './request-formatter';
import { isNotNullOrUndefined } from './utils';

export class JsonBuilder {
  private json: JsonObject;

  private constructor(json: JsonObject) {
    this.json = json;
  }

  public static create(): JsonBuilder {
    return new JsonBuilder({});
  }

  public static fromJsonObject(json: JsonObject): JsonBuilder {
    return new JsonBuilder(json);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public add(key: string, value: any = null): this {
    if (isNotNullOrUndefined(value)) {
      this.json[key] = isJsonConvertible(value) ? value.getJsonObject() : value;
    }

    return this;
  }

  public addPrice(key: string, value: string = null): this {
    if (isNotNullOrUndefined(value)) {
      this.json[key] = RequestFormatter.formatPrice(value);
    }

    return this;
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  public addArray(key: string, array: any[] = null): this {
    if (isNotNullOrUndefined(array)) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      this.json[key] = (array as any[]).map((value) =>
        isJsonConvertible(value) ? value.getJsonObject() : value
      );
    }

    return this;
  }

  public getObject(): JsonObject {
    return this.json;
  }

  public static jsonEncode(jsonObject: JsonObject): string {
    return JSON.stringify(jsonObject);
  }

  public static jsonDecode(rawResult: string): JsonObject {
    return JSON.parse(rawResult);
  }
}
