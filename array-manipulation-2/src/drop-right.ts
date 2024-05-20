/* exported dropRight */
function dropRight(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];
  if (count >= array.length) {
    return [];
  }
  for (let i = 0; i < array.length - count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
