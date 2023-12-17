export type JsonObject = { [key: string]: unknown };

export function isJsonConvertible(
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  value: any
): boolean {
  return (
    typeof value?.getJsonObject === 'function' ||
    typeof value?.toJsonString === 'function'
  );
}

export interface JsonConvertible {
  getJsonObject: () => JsonObject;
  toJsonString: () => string;
}
