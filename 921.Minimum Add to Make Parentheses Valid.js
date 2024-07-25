/**
* @param {string} s
* @return {number}
*/

const minAddToMakeValid = function (s) {
  let left = 0
  let right = 0
  for (let i = 0; i < s.length; i++) {
    if (s[i] === '(') {
      right++
    } else {
      right--
      if (right === -1) {
        right = 0
        left++
      }
    }
  }
  return left + right
};