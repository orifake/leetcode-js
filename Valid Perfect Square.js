/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let low = 0
  let high = num
  while (low <= high) {
    let mid = parseInt((low + high) / 2)
    if (mid * mid < num) {
      low = mid + 1
    } else if (mid * mid > num) {
      high = mid - 1
    } else {
      return true
    }
  }
  return false
};