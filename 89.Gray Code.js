/**
 * @param {number} n
 * @return {number[]}
 */
const grayCode = function (n) {
  const result = []
  result.push(0)
  for (let i = 0; i < n; i++) {
    const len = result.length
    for (k = len - 1; k >= 0; k--) {
      result.push(result[k] | 1 << i)
    }
  }

  return result
};

console.log(grayCode(2))