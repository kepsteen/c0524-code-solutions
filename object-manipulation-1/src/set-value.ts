/* exported setValue */
interface MyObject {
  [key: string]: number | string;
}
function setValue(obj: MyObject, key: string, value: number | string): void {
  obj[key] = value;
}
