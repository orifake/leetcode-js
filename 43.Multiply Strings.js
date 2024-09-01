/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const multiply = function (num1, num2) {
  if (num1 === '0' || num2 === '0') return '0'
  const m = num1.length
  const n = num2.length
  const result = new Array(m + n).fill(0)

  for (let i = m - 1; i >= 0; i--) {
    for (let j = n - 1; j >= 0; j--) {
      const p1 = i + j, p2 = i + j + 1
      let sum = result[p2] + Number(num1[i]) * Number(num2[j])
      result[p2] = sum % 10
      result[p1] += Math.floor(sum / 10)
    }
  }
  if (result[0] === 0) result.shift()
  return result.join('')
};

console.log(multiply("123", "456"))