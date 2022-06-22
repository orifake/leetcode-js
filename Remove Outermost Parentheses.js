/**
 * @param {string} s
 * @return {string}
 */
const removeOuterParentheses = function (s) {
  let ans = ''
  let prev_i = 0
  let count = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      count += 1
    } else {
      count -= 1
    }
    if (count === 0) {
      ans += s.slice(prev_i + 1, i)
      prev_i = i + 1
    }
  }
  return ans
};