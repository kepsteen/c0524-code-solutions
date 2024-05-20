'use strict';
/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    if (keys[i] in source && source[keys[i]] !== undefined) {
      let keyToAdd = keys[i];
      const ValueToAdd = source[keys[i]];
      newObj[keyToAdd] = ValueToAdd;
    }
  }
  return newObj;
}
