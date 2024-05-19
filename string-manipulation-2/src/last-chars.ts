/* exported lastChars */
function lastChars(length: number, string: string): string {
  if (length >= string.length) {
    return string;
  } else {
    const startingIndex = string.length - length;
    return string.slice(startingIndex);
  }
}
