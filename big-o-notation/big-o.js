/* exported uniqueQuadratic, uniqueLinear */

function uniqueLinear(words) {
  const seen = {}; // 1 * 1 = O(1)
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 2 * 1 = O(1)
  ) {
    const word = words[i]; // 2 * 1 = O(1)
    if (!seen[word]) {
      // 3 * 1 = O(1)
      seen[word] = true; // 2 * 1 = O(1)
      unique[unique.length] = word; // 3 * 1 = O(1)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueLinear: O(n)

function uniqueQuadratic(words) {
  const unique = []; // 1 * 1 = O(1)
  for (
    let i = 0; // 1 * 1 = O(1)
    i < words.length; // 2 * n = O(n)
    i++ // 2 * 1 = O(1)
  ) {
    const word = words[i]; // 2 * 1 = O(1)
    let isUnique = true; // 1 * 1 = O(1)
    for (
      let c = 0; // 1 * 1 = O(1)
      c < i; // 1 * n = O(n)
      c++ // 2 * n = O(n)
    ) {
      const comparing = words[c]; // 2 * 1 = O(1)
      if (comparing === word) {
        // 1 * 1 = O(1)
        isUnique = false; // 1 * 1 = O(1)
      }
    }
    if (isUnique) {
      // 1 * 1 = O(1)
      unique[unique.length] = word; // 3 * 1 = O(1)
    }
  }
  return unique; // 1 * 1 = O(1)
} // Big O Notation for uniqueQuadratic: O(n^2)
