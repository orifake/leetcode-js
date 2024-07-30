/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  let result = 0
  let lookup = {}
  for (let char of s) {
    lookup[char] = (lookup[char] || 0) + 1
    if (lookup[char] % 2 === 0) result += 2
  }
  return s.length > result ? result + 1 : result
};