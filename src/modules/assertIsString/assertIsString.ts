export function assertIsString<T>(
  value: T,
  message: string,
): asserts value is T extends string ? T : never {
  if (typeof value != 'string') {
    throw Error(message)
  }
}
