'use strict';
// 1
const width = 5;
const height = 10;
const area = width * height;
console.log('Area: ', area);
console.log('Type of area: ', typeof area);
// 2
const payment = 100;
const bill = 50;
const change = payment - bill;
console.log('Change: ', change);
console.log('Type of change: ', typeof change);
// 3
const quizzes = 87;
const midterm = 91;
const final = 83;
const grade = (quizzes + midterm + final) / 3;
console.log('Grade: ', grade);
console.log('Type of grade: ', typeof grade);
// 4
const firstName = 'Cody';
const lastName = 'Epstein';
const fullName = firstName + ' ' + lastName;
console.log('Full name: ', fullName);
console.log('Type of fullName: ', typeof fullName);
// 5
const pH = 3;
const isAcidic = pH < 7;
console.log('Is it Acidic?: ', isAcidic);
console.log('Type of isAcidic: ', typeof isAcidic);
// 6
const headCount = 1000;
const isSparta = headCount === 300;
console.log('Is it Sparta?: ', isSparta);
console.log('Type of isSparta: ', typeof isSparta);
// 7
let motto = fullName;
motto += ' is the GOAT';
console.log('Motto: ', motto);
console.log('Type of motto: ', typeof motto);
