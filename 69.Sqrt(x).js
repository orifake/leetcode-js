/**
 * @param {number} x
 * @return {number}
 */
const mySqrt = function (x) {
  let start = 1
  let end = x
  if (x === 0) {
    return 0;
  }

  while (start + 1 < end) {
    let mid = start + parseInt((end - start) / 2);
    if (mid * mid <= x) {
      start = mid;
    } else {
      end = mid;
    }
  }
  return start
};