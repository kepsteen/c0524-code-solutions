/* exported reverseWord */
function reverseWord(word: string): string {
  let reverseWordStr = '';
  for (let i = word.length - 1; i >= 0; i--) {
    reverseWordStr += word[i];
  }
  return reverseWordStr;
}
