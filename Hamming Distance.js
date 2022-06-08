/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
const hammingDistance = function (x, y) {
  let z = x ^ y;
  let ans = 0;
  while (z) {
    if (z & 1) ans++;
    z /= 2;
  }
  return ans;
};