'use strict';
/* exported truncate */
function truncate(length, string) {
  let truncatedStr = '';
  if (length > string.length) {
    return (string += '...');
  } else {
    return string.slice(0, length) + '...';
  }
}
