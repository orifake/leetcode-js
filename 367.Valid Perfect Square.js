/**
 * @param {number} num
 * @return {boolean}
 */
const isPerfectSquare = function (num) {
  let start = 0
  let end = num
  while (start <= end) {
    let mid = parseInt(start + (end - start) / 2)
    if (mid * mid < num) {
      start = mid + 1
    } else if (mid * mid > num) {
      end = mid - 1
    } else {
      return true
    }
  }
  return false
};