/**
 * @param {number[]} nums
 * @return {number}
 */
const arrayPairSum = function (nums) {
  nums = nums.sort((a, b) => a - b)
  let ans = 0
  for (let i = 0; i < nums.length; i += 2) {
    ans += nums[i]
  }
  return ans
};

console.log(arrayPairSum([6214, -2290, 2833, -7908]))