/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
  let ans = 0
  let curr = 0
  for (let char of s) {
    if (char === '(') {
      curr += 1
      ans = Math.max(curr, ans)
    } else if (char === ')') {
      curr -= 1
    }
  }
  return ans
};