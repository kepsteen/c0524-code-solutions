/* exported truncate */
function truncate(length: number, string: string): string {
  if (length > string.length) {
    return string + '...';
  } else {
    return string.slice(0, length) + '...';
  }
}
