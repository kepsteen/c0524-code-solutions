/* exported capitalize */
function capitalize(string: string): string {
  const stringArr = string.split('');
  for (let i = 0; i < stringArr.length; i++) {
    if (i === 0) {
      stringArr[i] = stringArr[i].toUpperCase();
    } else {
      stringArr[i] = stringArr[i].toLowerCase();
    }
  }
  return stringArr.join('');
}
