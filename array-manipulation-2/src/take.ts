/* exported take */
function take(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];
  if (array.length === 0) {
    return [];
  }
  for (let i = 0; i < count; i++) {
    newArr.push(array[i]);
  }
  return newArr;
}
