/**
 * @param {string} num1
 * @param {string} num2
 * @return {string}
 */
const addStrings = function (num1, num2) {
  let result = ''
  carry = 0
  p1 = num1.length - 1
  p2 = num2.length - 1
  while (p1 >= 0 || p2 >= 0) {
    x1 = (p1 >= 0 ? num1[p1] * 1 : 0)
    x2 = (p2 >= 0 ? num2[p2] * 1 : 0)
    value = (x1 + x2 + carry) % 10
    carry = ~~((x1 + x2 + carry) / 10)
    result = String(value) + result
    p1 -= 1
    p2 -= 1
  }

  if (carry) result = String(carry) + result
  return result
};

console.log(addStrings("11", "123"))