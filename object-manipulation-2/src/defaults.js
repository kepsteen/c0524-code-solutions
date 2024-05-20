'use strict';
/* exported defaults */
function defaults(target, source) {
  for (let key in source) {
    if (key in target) {
      continue;
    } else {
      let keyToAdd = key;
      let valueToAdd = source[key];
      target[keyToAdd] = valueToAdd;
    }
  }
  return target;
}
