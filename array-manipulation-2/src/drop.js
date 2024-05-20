'use strict';
/* exported drop */
function drop(array, count) {
  const newArr = [];
  if (array.length === 0) {
    return [];
  } else {
    for (let i = count; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
}
