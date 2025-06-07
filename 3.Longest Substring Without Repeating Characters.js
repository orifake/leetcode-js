/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  const lookup = {}
  let result = 0
  let left = 0
  for (let right = 0; right < s.length; right++) {
    if (s[right] in lookup) {
      left = Math.max(left, lookup[s[right]] + 1)
    }
    lookup[s[right]] = right
    result = Math.max(result, right - left + 1)
  }
  return result
};

console.log(lengthOfLongestSubstring("abcabcbb"))
