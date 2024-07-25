/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function (s) {
  let result = ''
  let prev = 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count += 1
    } else {
      count -= 1
    }
    if (count === 0) {
      result += s.slice(prev + 1, i)
      prev = i + 1
    }
  }
  return result
};