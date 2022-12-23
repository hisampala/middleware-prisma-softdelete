export function excludeSelect<T, Key extends keyof T>(
  item: T,
  keys: Key[],
): Omit<T, Key> {
  for (const key of keys) {
    delete item[key];
  }
  return item;
}
