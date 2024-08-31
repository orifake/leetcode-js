/**
 * @param {number[]} cost
 * @return {number}
 */
const minCostClimbingStairs = function (cost) {
  let dp = 0
  let dp_1 = 0
  let dp_2 = 0

  for (let i = 2; i <= cost.length; i++) {
    dp = Math.min(dp_2 + cost[i - 2], dp_1 + cost[i - 1])
    dp_2 = dp_1
    dp_1 = dp
  }

  return dp_1
};

console.log(minCostClimbingStairs([1, 100, 1, 1, 1, 100, 1, 1, 100, 1]))