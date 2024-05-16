'use strict';
function isUnderFive(number) {
  if (number < 5) {
    return true;
  } else {
    return false;
  }
}
function isEven(number) {
  if (number % 2 === 0) {
    return true;
  } else {
    return false;
  }
}
function startsWithJ(string) {
  if (string[0] === 'J') {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrink(person) {
  if (person.age >= 21) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrive(person) {
  if (person.age >= 16) {
    return true;
  } else {
    return false;
  }
}
function isOldEnoughToDrinkAndDrive(person) {
  if (person.age >= 21) {
    return false;
  } else {
    return false;
  }
}
function categorizeAcidity(pH) {
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
function introduceWarnerBro(name) {
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
function recommendMovie(genre) {
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
