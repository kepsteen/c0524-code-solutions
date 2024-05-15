'use strict';
/* exported getLastCharacter */
function getLastCharacter(string) {
  const lastIndex = string.split('').length - 1;
  return string[lastIndex];
}
