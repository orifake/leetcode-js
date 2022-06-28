/**
 * @param {string} s
 * @return {number}
 */
const longestPalindrome = function (s) {
  let ans = 0
  let lookup = {}
  for (let char of s) {
    lookup[char] = (lookup[char] || 0) + 1
    if (lookup[char] % 2 === 0) ans += 2
  }
  return s.length > ans ? ans + 1 : ans
};