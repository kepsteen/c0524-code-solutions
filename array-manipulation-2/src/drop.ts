/* exported drop */
function drop(array: unknown[], count: number): unknown[] {
  const newArr: unknown[] = [];
  if (array.length === 0) {
    return [];
  } else {
    for (let i = count; i < array.length; i++) {
      newArr.push(array[i]);
    }
    return newArr;
  }
}
