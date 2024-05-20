/* exported omit */
function omit(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      const keyToAdd = key;
      const valueToAdd = source[key];
      newObj[keyToAdd] = valueToAdd;
    }
  }
  return newObj;
}
