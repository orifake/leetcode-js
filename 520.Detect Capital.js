/**
 * @param {string} word
 * @return {boolean}
 */
const detectCapitalUse = function (word) {
  if (word.toUpperCase() === word) return true
  if (word.toLowerCase() === word) return true
  if (word[0].toUpperCase() === word[0] && word.slice(1 - word.length).toLowerCase() === word.slice(1 - word.length)) {
    return true
  }
  return false
};

// console.log(detectCapitalUse('Google'))
console.log(detectCapitalUse('LeeTCode'))