/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const longestSubstring = function (s, k) {
  let size = new Set(s).size
  let max = 0
  for (let i = 1; i <= size; i++) {
    let start = 0, end = 0, atLeastK = 0, unique = 0, m = new Map()
    while (end < s.length) {
      m.set(s[end], m.get(s[end]) + 1 || 1)
      if (m.get(s[end]) == 1) unique++
      if (m.get(s[end]) == k) atLeastK++

      while (unique > i) {
        m.set(s[start], m.get(s[start]) - 1)
        if (m.get(s[start]) == k - 1) atLeastK--
        if (m.get(s[start]) == 0) unique--
        start++
      }
      if (unique == i && unique == atLeastK) {
        max = Math.max(max, end - start + 1)
      }
      end++
    }
  }
  return max
};

console.log(longestSubstring("ababbc"))