// eslint-disable-next-line @typescript-eslint/no-unnecessary-type-constraint
export function isNotNullOrUndefined<T extends unknown>(
  value: T | null | undefined
): value is T {
  return value !== null && value !== undefined;
}
