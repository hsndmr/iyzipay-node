import { FlexibleData, FlexibleValue } from './flexible-data.interface';
import {
  RequestDataSupplier,
  isRequestDataSupplier,
} from './request-data-supplier.interface';
import { isNotNullOrUndefined } from './utils';

export type RequestValue = FlexibleData | RequestDataSupplier | FlexibleValue;

export class RequestDataBuilder {
  private data: FlexibleData;

  private constructor(data: FlexibleData) {
    this.data = data;
  }

  public static create(): RequestDataBuilder {
    return new RequestDataBuilder({});
  }

  public static fromObject(data: FlexibleData): RequestDataBuilder {
    return new RequestDataBuilder(data);
  }

  public add(key: string, value: RequestValue = null): this {
    if (isNotNullOrUndefined(value)) {
      this.data[key] = this.processData(value);
    }

    return this;
  }

  protected processData(value: RequestValue = null): FlexibleData {
    return isRequestDataSupplier(value)
      ? (value as RequestDataSupplier).getRequestData()
      : (value as FlexibleData);
  }

  public addArray(key: string, array: RequestValue[] = null): this {
    if (isNotNullOrUndefined(array)) {
      this.data[key] = array.map((value) => this.processData(value));
    }

    return this;
  }

  public get(): FlexibleData {
    return this.data;
  }
}
