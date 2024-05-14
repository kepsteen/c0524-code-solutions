interface StudentProps {
  firstName: string;
  lastName: string;
  age: number;
  livesInIrvine?: boolean;
  previousOccupation?: string;
}
const student: StudentProps = {
  firstName: 'Cody',
  lastName: 'Epstein',
  age: 27,
};
const fullName: string = student.firstName + ' ' + student.lastName;
console.log('Full name: ', fullName);

student.livesInIrvine = false;
student.previousOccupation = 'CNA';

console.log('livesInIrvine: ', student.livesInIrvine);
console.log('previousOccupation: ', student.previousOccupation);
console.log('student object: ', student);
console.log('Type of student object: ', typeof student);

interface Vehicle {
  make: string;
  model: string;
  year: number;
  color?: string;
  isConvertible?: boolean;
}

const vehicle: Vehicle = {
  make: 'Ford',
  model: 'Fusion Energi',
  year: 2014,
};

vehicle['color'] = 'gunmetal gray';
vehicle['isConvertible'] = false;

console.log('Color: ', vehicle['color']);
console.log('isConvertible: ', vehicle['isConvertible']);
console.log('vehicle object: ', vehicle);
console.log('Type of vehicle object: ', typeof vehicle);

interface Pet {
  name?: string;
  kind?: string;
}
const pet: Pet = {
  name: 'Luna',
  kind: 'Dog',
};

delete pet.name;
delete pet.kind;

console.log('pet object: ', pet);
console.log('Type of pet object: ', typeof pet);
