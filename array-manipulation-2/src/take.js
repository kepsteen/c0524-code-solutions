'use strict';
/* exported take */
function take(array, count) {
  const newArr = [];
  if (array.length === 0) {
    return [];
  }
  for (let i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
