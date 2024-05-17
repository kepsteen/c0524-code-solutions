/* exported getKeys */
function getKeys(obj: Record<string, unknown>): string[] {
  const keyArr: string[] = [];
  for (const key in obj) {
    keyArr.push(key);
  }
  return keyArr;
}
