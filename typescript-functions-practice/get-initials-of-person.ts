/* exported getInitialsOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}
function getInitialsOfPerson(person: Person): string {
  return person.firstName.split('')[0] + person.lastName.split('')[0];
}
