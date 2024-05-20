'use strict';
/* exported pick */
function pick(source, keys) {
  const newObj = {};
  for (let i = 0; i < keys.length; i++) {
    for (let key in source) {
      if (keys[i] === key) {
        newObj[key] = source[key];
      }
    }
  }
  return newObj;
}
