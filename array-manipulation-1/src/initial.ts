/* exported initial */
function initial(array: unknown[]): unknown[] {
  const initialArr = [];
  for (let i = 0; i < array.length; i++) {
    if (i !== array.length - 1) {
      initialArr.push(array[i]);
    }
  }
  return initialArr;
}
