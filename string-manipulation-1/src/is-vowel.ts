/* exported isVowel */
function isVowel(char: string): boolean {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  for (let i = 0; i < vowels.length; i++) {
    if (char.toLowerCase() === vowels[i]) {
      return true;
    }
  }
  return false;
}
