'use strict';
/* exported lastChars */
function lastChars(length, string) {
  if (length >= string.length) {
    return string;
  } else {
    const startingIndex = string.length - length;
    return string.slice(startingIndex);
  }
}
