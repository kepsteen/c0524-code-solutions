'use strict';
/* exported compact */
function compact(array) {
  const compactArr = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i]) {
      compactArr.push(array[i]);
    }
  }
  return compactArr;
}
