/* exported countdown */
function countdown(num: number): number[] {
  const array = [];
  for (let i = num; i >= 0; i--) {
    array.push(i);
  }
  return array;
}
