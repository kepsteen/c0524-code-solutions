'use strict';
/* exported swapChars */
function swapChars(firstIndex, secondIndex, string) {
  let swapCharStr = '';
  for (let i = 0; i < string.length; i++) {
    if (i === firstIndex) {
      swapCharStr += string[secondIndex];
    } else if (i === secondIndex) {
      swapCharStr += string[firstIndex];
    } else {
      swapCharStr += string[i];
    }
  }
  return swapCharStr;
}
