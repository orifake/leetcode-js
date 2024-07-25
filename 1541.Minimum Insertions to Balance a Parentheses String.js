/**
 * @param {string} s
 * @return {number}
 */

const minInsertions = function (s) {
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      right += 2
      if (right % 2 == 1) {
        // 插入一个右括号
        left++;
        // 对右括号的需求减一
        right--;
      }
    } else {
      right--
      if (right === -1) {
        right = 1
        left++
      }
    }
  }
  return left + right
};