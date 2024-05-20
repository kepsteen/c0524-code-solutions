'use strict';
/* exported firstChars */
function firstChars(length, string) {
  if (length > string.length) {
    return string;
  } else {
    return string.slice(0, length);
  }
}
