/* exported pick */
function pick(source: Record<string, unknown>, keys: string[]): object {
  const newObj: Record<string, unknown> = {};
  for (let i = 0; i < keys.length; i++) {
    for (const key in source) {
      if (keys[i] === key) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
