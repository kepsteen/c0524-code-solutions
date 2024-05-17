'use strict';
/* exported oddOrEven */
function oddOrEven(numbers) {
  const OddOrEvenArr = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      OddOrEvenArr.push('even');
    } else {
      OddOrEvenArr.push('odd');
    }
  }
  return OddOrEvenArr;
}
