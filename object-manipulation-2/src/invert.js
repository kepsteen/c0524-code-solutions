'use strict';
/* exported invert */
function invert(source) {
  const newObj = {};
  for (let key in source) {
    let keyToAdd = source[key];
    let valueToAdd = key;
    newObj[keyToAdd] = valueToAdd;
  }
  return newObj;
}
