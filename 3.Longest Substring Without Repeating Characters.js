/**
 * @param {string} s
 * @return {number}
 */
const lengthOfLongestSubstring = function (s) {
  let window = new Map();
  let left = 0;
  let right = 0;
  let result = 0;
  while (right < s.length) {
    const char = s[right];
    right++;
    window.set(char, (window.get(char) || 0) + 1);

    while (window.get(char) > 1) {
      const leftChar = s[left];
      left++;
      window.set(leftChar, window.get(leftChar) - 1);
    }

    result = Math.max(result, right - left);
  }
  return result;
};

console.log(lengthOfLongestSubstring("abcabcbb")) // Output: 3
