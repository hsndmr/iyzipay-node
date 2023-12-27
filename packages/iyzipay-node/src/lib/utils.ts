// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export function isNotNullOrUndefined<T extends unknown>(
  value: T | null | undefined
): value is T {
  return value !== null && value !== undefined;
}

export function substr(str: string, start: number, length?: number): string {
  let adjustedStart = start < 0 ? str.length + start : start;

  if (length === undefined) {
    return str.substring(adjustedStart);
  }

  let adjustedLength =
    length < 0 ? str.length + length - adjustedStart : length;

  if (adjustedLength < 0) {
    return '';
  }

  return str.substring(adjustedStart, adjustedStart + adjustedLength);
}

export function uniqid(prefix: string = ''): string {
  const now = Date.now();

  const random = Math.floor(Math.random() * 1000000);

  return prefix + now.toString(16) + random.toString(16);
}
