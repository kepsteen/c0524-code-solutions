// 1
const width: number = 5;
const height: number = 10;
const area: number = width * height;
console.log('Area: ', area);
console.log('Type of area: ', typeof area);

// 2
const payment: number = 100;
const bill: number = 50;
const change: number = payment - bill;
console.log('Change: ', change);
console.log('Type of change: ', typeof change);

// 3
const quizzes: number = 87;
const midterm: number = 91;
const final: number = 83;
const grade: number = (quizzes + midterm + final) / 3;

console.log('Grade: ', grade);
console.log('Type of grade: ', typeof grade);

// 4
const firstName: string = 'Cody';
const lastName: string = 'Epstein';
const fullName: string = firstName + ' ' + lastName;
console.log('Full name: ', fullName);
console.log('Type of fullName: ', typeof fullName);

// 5
const pH: number = 3;
const isAcidic: boolean = pH < 7;
console.log('Is it Acidic?: ', isAcidic);
console.log('Type of isAcidic: ', typeof isAcidic);

// 6
const headCount: number = 1000;
const isSparta: boolean = headCount === 300;
console.log('Is it Sparta?: ', isSparta);
console.log('Type of isSparta: ', typeof isSparta);

// 7
let motto: string = fullName;
motto += ' is the GOAT';
console.log('Motto: ', motto);
console.log('Type of motto: ', typeof motto);
