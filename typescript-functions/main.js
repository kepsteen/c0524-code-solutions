'use strict';
function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}
console.log('10 min to s: ', convertMinutesToSeconds(10));
function greet(name) {
  return 'Hello ' + name;
}
console.log('value of greet: ', greet('April'));
const getArea = (width, height) => width * height;
console.log(
  'Area of rectangle of  4 units wide and 2 units tall: ',
  getArea(4, 2)
);
const person = {
  firstName: 'Cody',
  lastName: 'Epstein',
};
const getFirstName = (person) => person.firstName;
console.log('Get first name of Cody Epstein: ', getFirstName(person));
const getLastElement = (arr) => arr[arr.length - 1];
console.log('Get last element of [0,1,2]: ', getLastElement([0, 1, 2]));
const callOtherFunction = (otherFunction, params) => otherFunction(params);
console.log(
  'value when greet and Cody are passed to callOtherFunction: ',
  callOtherFunction(greet, 'Cody')
);
