/* exported isUnderFive,
            isEven,
            startsWithJ,
            isOldEnoughToDrink,
            isOldEnoughToDrive,
            isOldEnoughToDrinkAndDrive,
            categorizeAcidity,
            introduceWarnerBro,
            recommendMovie
 */
interface Person {
  name: string;
  age: number;
}

function isUnderFive(number: number): boolean {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}

function isEven(number: number): boolean {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}

function startsWithJ(string: string): boolean {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrink(person: Person): boolean {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}

function isOldEnoughToDrinkAndDrive(person: Person): boolean {
  if (person) {
    return false;
  } else {
    return false;
  }
}

function categorizeAcidity(pH: number): string {
  if (pH === 7) {
    return 'neutral';
  } else if (pH < 7 && pH >= 0) {
    return 'acid';
  } else if (pH <= 14 && pH > 7) {
    return 'base';
  } else {
    return 'invalid pH level';
  }
}

function introduceWarnerBro(name: string): string {
  name = name.toLowerCase();
  switch (name) {
    case 'yakko':
      return "We're the Warner brothers!";
    case 'wakko':
      return "We're the Warner brothers!";
    case 'dot':
      return "I'm cute~";
    default:
      return 'Goodnight Everybody';
  }
}

function recommendMovie(genre: string): string {
  switch (genre) {
    case 'action':
      return 'The Expendables';
    case 'comedy':
      return 'Superbad';
    case 'horror':
      return 'The Conjuring';
    case 'musical':
      return 'Hamilton';
    case 'sci-fi':
      return 'Planet of the Apes';
    default:
      return 'Choose one of the valid genres: action, comedy, horror, musical or sci-fi';
  }
}
