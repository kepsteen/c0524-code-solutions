'use strict';
/* exported getValues */
function getValues(obj) {
  const valueArr = [];
  for (let key in obj) {
    valueArr.push(obj[key]);
  }
  return valueArr;
}
