// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isRequestStringConvertible(value: any): boolean {
  return typeof value?.toPKIRequestString === 'function';
}

export interface RequestStringConvertible {
  toPKIRequestString: () => string;
}
