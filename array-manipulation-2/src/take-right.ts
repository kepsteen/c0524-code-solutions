/* exported takeRight */
function takeRight(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];
  if (count > array.length) {
    count = array.length;
  }
  const startingIndex = array.length - count;
  for (let i = startingIndex; i < array.length; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
