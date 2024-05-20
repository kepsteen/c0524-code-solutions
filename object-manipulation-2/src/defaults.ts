/* exported defaults */
function defaults(
  target: Record<string, unknown>,
  source: Record<string, unknown>
): Record<string, unknown> {
  for (const key in source) {
    if (key in target) {
      continue;
    } else {
      const keyToAdd = key;
      const valueToAdd = source[key];
      target[keyToAdd] = valueToAdd;
    }
  }
  return target;
}
