'use strict';
// The Math Object
const heroes = ['Batman', 'Deadpool', 'Iron Man', 'Thor'];
let randomNumber = Math.random();
randomNumber *= heroes.length;
const randomIndex = Math.floor(randomNumber);
console.log('Random Index: ', randomIndex);
const randomHero = heroes[randomIndex];
console.log('Random Hero: ', randomHero);
// Array Methods
const library = [
  {
    title: 'Harry Potter',
    author: 'J.K. Rowling',
  },
  {
    title: 'Lord of the Rings',
    author: 'J.R.R. Tolkien',
  },
  {
    title: 'To Kill A Mockingbird',
    author: 'Harper Lee',
  },
];
const lastBook = library.pop();
console.log('Last Book', lastBook);
const firstBook = library.shift();
console.log('First Book: ', firstBook);
const js = {
  title: 'JavaScript for Impatient Programmers',
  author: 'Dr. Axel Rauschmayer',
};
const css = {
  title: 'CSS Secrets',
  author: 'Lea Verou',
};
library.push(js);
library.unshift(css);
library.splice(1, 1);
console.log('Library: ', library);
// String Methods
const fullName = 'Cody Epstein';
const firstAndLastName = fullName.split(' ');
console.log('First and Last name: ', firstAndLastName);
const firstName = firstAndLastName[0];
const sayMyName = firstName.toUpperCase();
console.log('Say my name: ', sayMyName);
const employee = {
  name: 'Cody Epstein',
  age: 27,
  position: 'Junior Software Developer',
};
const employeeKeys = Object.keys(employee);
console.log('employeeKeys: ', employeeKeys);
const employeeValues = Object.values(employee);
console.log('employeeValues: ', employeeValues);
const employeePairs = Object.entries(employee);
console.log('employeePairs: ', employeePairs);
