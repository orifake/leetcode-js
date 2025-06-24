/**
 * @param {number[]} prices
 * @return {number}
 */
const maxProfit = function (prices) {
  let ans = 0
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] - prices[i - 1] > 0) {
      ans += prices[i] - prices[i - 1]
    }
  }
  return ans
};

console.log(maxProfit([7, 1, 5, 3, 6, 4])) // 7