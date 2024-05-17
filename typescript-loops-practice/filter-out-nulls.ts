/* exported filterOutNulls */
function filterOutNulls(values: any[]): number[] {
  const filterNullArr = [];
  for (let i = 0; i < values.length; i++) {
    if (values[i] != null) {
      filterNullArr.push(values[i]);
    }
  }
  return filterNullArr;
}
