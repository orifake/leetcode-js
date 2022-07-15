/**
 * @param {number} n
 * @return {number}
 */
const arrangeCoins = function (n) {
  let stairs = 0;
  while (stairs <= n) {
    n -= stairs
    stairs++
  }
  return stairs - 1
};