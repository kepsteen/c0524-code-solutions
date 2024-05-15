/* exported getPropertyValue */
interface Person {
  name: string;
  occupation: string;
  birthplace: string;
}
function getPropertyValue(object: Person, key: keyof Person): any {
  return object[key];
}
