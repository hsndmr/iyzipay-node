import { FlexibleData } from './flexible-data.interface';

export interface RequestDataSupplier {
  getRequestData: () => FlexibleData;
  toRequestDataString: () => string;
}

export function isRequestDataSupplier(value: unknown): boolean {
  return typeof (value as RequestDataSupplier)?.getRequestData === 'function';
}
