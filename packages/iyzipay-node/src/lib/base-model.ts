import { FlexibleData } from './flexible-data.interface';
import { RequestDataSupplier } from './request-data-supplier.interface';
import { RequestStringConvertible } from './request-string-convertible.interface';

export abstract class BaseModel
  implements RequestStringConvertible, RequestDataSupplier
{
  public toPKIRequestString(): string {
    return '';
  }

  public getRequestData(): FlexibleData {
    return {};
  }

  public toRequestDataString(): string {
    return JSON.stringify(this.getRequestData());
  }
}
