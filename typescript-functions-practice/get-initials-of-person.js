'use strict';
function getInitialsOfPerson(person) {
  return person.firstName.split('')[0] + person.lastName.split('')[0];
}
