/* exported toObject */
type TupleType = [key: string, value: any];
function toObject(keyValuePair: TupleType): Record<string, unknown> {
  const newObj: Record<string, unknown> = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
