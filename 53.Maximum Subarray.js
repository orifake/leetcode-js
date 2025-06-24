/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  if (!nums.length) return 0
  let dp = []
  dp[0] = nums[0]
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }
  return Math.max.apply(null, dp);
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))