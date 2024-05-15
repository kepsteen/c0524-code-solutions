/* exported getFirstInitialOfPerson */
interface Person {
  firstName: string;
  lastName: string;
}

function getFirstInitialOfPerson(person: Person): string {
  return person.firstName.split('')[0];
}
