/* exported getValues */
function getValues(obj: Record<string, unknown>): unknown[] {
  const valueArr: unknown[] = [];
  for (const key in obj) {
    valueArr.push(obj[key]);
  }
  return valueArr;
}
