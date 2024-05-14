'use strict';
// Colors Array
const colors = ['red', 'white', 'blue'];
const firstColor = colors[0];
const secondColor = colors[1];
const thirdColor = colors[2];
console.log('First Color: ', firstColor);
console.log('Second Color: ', secondColor);
console.log('Third Color: ', thirdColor);
console.log(`America is ${colors[0]}, ${colors[1]} and ${colors[2]}.`);
colors[2] = 'green';
console.log(`Mexico is ${colors[0]}, ${colors[1]} and ${colors[2]}. `);
console.log('value of colors: ', colors);
console.log('type of colors: ', typeof colors);
// Students Array
const students = ['Sawyer', 'John', 'Ben', 'Kate'];
const numberOfStudents = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);
const lastIndex = numberOfStudents - 1;
const lastStudent = students[lastIndex];
console.log(`${lastStudent} is the last student in the class.`);
console.log('value of students: ', students);
console.log('type of students: ', typeof students);
