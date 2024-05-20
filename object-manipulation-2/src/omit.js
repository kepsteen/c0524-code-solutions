'use strict';
/* exported omit */
function omit(source, keys) {
  const newObj = {};
  for (const key in source) {
    if (!keys.includes(key)) {
      const keyToAdd = key;
      const valueToAdd = source[key];
      newObj[keyToAdd] = valueToAdd;
    }
  }
  return newObj;
}
