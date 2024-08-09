/**
 * @param {number} n
 * @return {number}
 */
const findNthDigit = function (n) {
  let digit = 1
  let base = 1

  while (n > 9 * base * digit) {
    n -= 9 * base * digit
    base *= 10
    digit++
  }

  let val = base + (n - 1) / digit
  let index = (n - 1) % digit

  return ("" + val).charAt(index) - '0'
}

console.log(findNthDigit(11))