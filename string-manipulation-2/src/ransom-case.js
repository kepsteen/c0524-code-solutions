'use strict';
/* exported ransomCase */
function ransomCase(word) {
  let ransomCaseStr = '';
  word = word.toLowerCase();
  for (let i = 0; i < word.length; i++) {
    if (i % 2 === 0) {
      ransomCaseStr += word[i];
    } else {
      ransomCaseStr += word[i].toUpperCase();
    }
  }
  return ransomCaseStr;
}
