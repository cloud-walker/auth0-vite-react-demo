export function assertIsNotNullish<T>(
  value: T,
  message: string,
): asserts value is NonNullable<T> {
  if (value == null) {
    throw Error(message)
  }
}
