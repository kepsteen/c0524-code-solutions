/* exported getLastCharacter */
function getLastCharacter(string: string): string {
  const lastIndex: number = string.split('').length - 1;
  return string[lastIndex];
}
