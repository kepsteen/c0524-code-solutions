'use strict';
/* exported invert */
function invert(source) {
  const newObj = {};
  for (const key in source) {
    const keyToAdd = source[key];
    const valueToAdd = key;
    newObj[keyToAdd] = valueToAdd;
  }
  return newObj;
}
