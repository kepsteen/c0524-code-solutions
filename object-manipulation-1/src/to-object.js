'use strict';
function toObject(keyValuePair) {
  const newObj = {};
  newObj[keyValuePair[0]] = keyValuePair[1];
  return newObj;
}
