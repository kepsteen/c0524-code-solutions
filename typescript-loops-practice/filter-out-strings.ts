/* exported filterOutStrings */
function filterOutStrings(values: any[]): number[] {
  const filterStrArr = [];
  for (let i = 0; i < values.length; i++) {
    if (typeof values[i] !== 'string') {
      filterStrArr.push(values[i]);
    }
  }
  return filterStrArr;
}
