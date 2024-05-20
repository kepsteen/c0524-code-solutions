/* exported chunk */
function chunk(array: unknown[], size: number): unknown[] {
  const newArr: unknown[] = [];
  const numSubArrays = Math.ceil(array.length / size);
  let arrayIndex = 0;
  for (let i = 0; i < numSubArrays; i++) {
    const subarray: unknown[] = [];
    for (let i = 0; i < size; i++) {
      if (arrayIndex <= array.length - 1) {
        subarray.push(array[arrayIndex]);
      } else {
        break;
      }
      arrayIndex += 1;
    }
    newArr.push(subarray);
  }
  return newArr;
}
