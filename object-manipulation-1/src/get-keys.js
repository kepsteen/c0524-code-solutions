'use strict';
/* exported getKeys */
function getKeys(obj) {
  const keyArr = [];
  for (let key in obj) {
    keyArr.push(key);
  }
  return keyArr;
}
