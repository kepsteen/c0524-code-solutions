/* exported capitalizeWords */
function capitalizeWords(string: string): string {
  const splitWords = string.split(' ');
  const capitalizedStrArr = [];
  for (let i = 0; i < splitWords.length; i++) {
    capitalizedStrArr.push(
      splitWords[i][0].toUpperCase() + splitWords[i].slice(1).toLowerCase()
    );
  }
  return capitalizedStrArr.join(' ');
}
