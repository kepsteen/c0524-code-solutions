interface Person {
  firstName: string;
  lastName: string;
}

function convertMinutesToSeconds(minutes: number): number {
  return minutes * 60;
}
console.log('10 min to s: ', convertMinutesToSeconds(10));

function greet(name: string): string {
  return 'Hello ' + name;
}

console.log('value of greet: ', greet('April'));

const getArea = (width: number, height: number): number => width * height;
console.log(
  'Area of rectangle of  4 units wide and 2 units tall: ',
  getArea(4, 2)
);

const person: Person = {
  firstName: 'Cody',
  lastName: 'Epstein',
};

const getFirstName = (person: Person): string => person.firstName;
console.log('Get first name of Cody Epstein: ', getFirstName(person));

const getLastElement = (arr: unknown[]): unknown => arr[arr.length - 1];
console.log('Get last element of [0,1,2]: ', getLastElement([0, 1, 2]));

const callOtherFunction = (otherFunction: any, params: unknown): unknown =>
  otherFunction(params);
console.log(
  'value when greet and Cody are passed to callOtherFunction: ',
  callOtherFunction(greet, 'Cody')
);
