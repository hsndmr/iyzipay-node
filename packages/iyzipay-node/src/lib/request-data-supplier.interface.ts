import { FlexibleData } from './flexible-data.interface';

export interface RequestDataSupplier {
  getRequestData: () => FlexibleData;
}

export function isRequestDataSupplier(value: unknown): boolean {
  return typeof (value as RequestDataSupplier)?.getRequestData === 'function';
}
