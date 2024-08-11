/**
 * @param {number} n
 * @return {string[]}
 */
const generateParenthesis = function (n) {
  let result = []
  const backtrack = (temp = '', left = 0, right = 0) => {
    if (temp.length === n * 2) {
      result.push(temp)
      return
    }
    if (left < n) {
      backtrack(temp + '(', left + 1, right)
    }
    if (right < left) {
      backtrack(temp + ')', left, right + 1)
    }
  }
  backtrack()
  return result
};

console.log(generateParenthesis(3))