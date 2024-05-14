// Colors Array

const colors: string[] = ['red', 'white', 'blue'];
const firstColor: string = colors[0];
const secondColor: string = colors[1];
const thirdColor: string = colors[2];

console.log('First Color: ', firstColor);
console.log('Second Color: ', secondColor);
console.log('Third Color: ', thirdColor);

console.log(`America is ${colors[0]}, ${colors[1]} and ${colors[2]}.`);
colors[2] = 'green';

console.log(`Mexico is ${colors[0]}, ${colors[1]} and ${colors[2]}. `);
console.log('value of colors: ', colors);
console.log('type of colors: ', typeof colors);

// Students Array

const students: string[] = ['Sawyer', 'John', 'Ben', 'Kate'];
const numberOfStudents: number = students.length;
console.log(`There are ${numberOfStudents} students in the class.`);

const lastIndex: number = numberOfStudents - 1;
const lastStudent: string = students[lastIndex];
console.log(`${lastStudent} is the last student in the class.`);
console.log('value of students: ', students);
console.log('type of students: ', typeof students);
