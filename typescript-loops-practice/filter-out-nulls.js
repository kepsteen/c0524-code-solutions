'use strict';
/* exported filterOutNulls */
function filterOutNulls(values) {
  const filterNullArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      filterNullArr.push(values[i]);
    }
  }
  return filterNullArr;
}
