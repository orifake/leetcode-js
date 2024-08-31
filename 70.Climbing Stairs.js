/**
 * @param {number} n
 * @return {number}
 */
const climbStairs = function (n) {
  if (n <= 1) return n
  let dp_i_1 = 1
  let dp_i_2 = 1;
  for (let i = 2; i <= n; i++) {
    let dp_i = dp_i_1 + dp_i_2;
    dp_i_2 = dp_i_1;
    dp_i_1 = dp_i;
  }
  return dp_i_1;
};
