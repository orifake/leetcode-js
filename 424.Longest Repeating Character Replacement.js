/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
const characterReplacement = function (s, k) {
  let map = new Array(26).fill(0)

  let left = 0
  let right = 0
  let max = 0

  const A_CODE = "A".charCodeAt(0)

  while (right < s.length) {
    if (right - left - max <= k) {
      let val = ++map[s.charCodeAt(right) - A_CODE]

      if (val > max) {
        max = val
      }

      right++
    } else {
      map[s.charCodeAt(left) - A_CODE]--
      left++
    }
  }

  return max + k > s.length ? s.length : max + k
};

console.log(characterReplacement("AABABBA", 1))