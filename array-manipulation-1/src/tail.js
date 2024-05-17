'use strict';
/* exported tail */
function tail(array) {
  const tailArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i === 0) {
      continue;
    } else {
      tailArr.push(array[i]);
    }
  }
  return tailArr;
}
