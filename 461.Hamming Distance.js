/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let z = x ^ y;
  let result = 0;
  while (z) {
    if (z & 1) result++;
    z /= 2;
  }
  return result;
};