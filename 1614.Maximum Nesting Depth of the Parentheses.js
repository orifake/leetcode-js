/**
 * @param {string} s
 * @return {number}
 */
const maxDepth = function (s) {
  let result = 0
  let curr = 0
  for (let char of s) {
    if (char === '(') {
      curr += 1
      result = Math.max(curr, result)
    } else if (char === ')') {
      curr -= 1
    }
  }
  return result
};