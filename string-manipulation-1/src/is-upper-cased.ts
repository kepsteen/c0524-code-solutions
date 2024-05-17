/* exported isUpperCased */
function isUpperCased(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toUpperCase() !== word[i]) {
      return false;
    }
  }
  return true;
}
