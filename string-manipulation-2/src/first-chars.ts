/* exported firstChars */
function firstChars(length: number, string: string): string {
  if (length > string.length) {
    return string;
  } else {
    return string.slice(0, length);
  }
}
