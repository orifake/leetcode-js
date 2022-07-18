/**
 * @param {number[]} nums
 * @return {number}
 */
const maxSubArray = function (nums) {
  if (!nums.length) return 0
  let dp = []
  dp[0] = nums[0]
  let ans = Number.NEGATIVE_INFINITY
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(nums[i], nums[i] + dp[i - 1])
  }
  for (let j = 0; j < nums.length; j++) {
    ans = Math.max(ans, dp[j])
  }
  return ans
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]))