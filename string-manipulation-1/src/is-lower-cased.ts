/* exported isLowerCased */
function isLowerCased(word: string): boolean {
  for (let i = 0; i < word.length; i++) {
    if (word[i].toLowerCase() !== word[i]) {
      return false;
    }
  }
  return true;
}
