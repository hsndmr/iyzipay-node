import { JsonBuilder } from './json-builder';
import { JsonConvertible, JsonObject } from './json-convertbile.interface';
import { RequestStringConvertible } from './request-string-convertible.interface';

export abstract class BaseModel
  implements RequestStringConvertible, JsonConvertible
{
  public toJsonString(): string {
    return JsonBuilder.jsonEncode(this.getJsonObject());
  }

  public toPKIRequestString(): string {
    return '';
  }

  public getJsonObject(): JsonObject {
    return {};
  }
}
