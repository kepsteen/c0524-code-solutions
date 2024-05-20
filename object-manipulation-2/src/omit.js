'use strict';
/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (let key in source) {
    if (!keys.includes(key)) {
      let keyToAdd = key;
      let valueToAdd = source[key];
      newObj[keyToAdd] = valueToAdd;
    }
  }
  return newObj;
}
