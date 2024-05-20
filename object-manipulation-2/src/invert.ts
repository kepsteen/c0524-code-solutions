/* exported invert */
function invert(source: Record<string, any>): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  for (const key in source) {
    const keyToAdd = source[key];
    const valueToAdd = key;
    newObj[keyToAdd] = valueToAdd;
  }
  return newObj;
}
