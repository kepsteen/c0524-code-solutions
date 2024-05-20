/* exported pick */
function pick(
  source: Record<string, unknown>,
  keys: string[]
): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      const keyToAdd = keys[i];
      const ValueToAdd = source[keys[i]];
      newObj[keyToAdd] = ValueToAdd;
    }
  }
  return newObj;
}
