/**
 * @param {number[]} nums
 * @return {number}
 */
const findUnsortedSubarray = function (nums) {
  const len = nums.length
  let left = -1
  let right = -2
  let min_from_right = nums[len - 1]
  let max_from_left = nums[0]
  for (let i = 1; i < len; i++) {
    max_from_left = Math.max(max_from_left, nums[i])
    min_from_right = Math.min(min_from_right, nums[len - 1 - i])
    if (nums[i] < max_from_left) right = i
    if (nums[len - 1 - i] > min_from_right) left = len - 1 - i
  }
  return right - left + 1
};

console.log(findUnsortedSubarray([2, 6, 4, 8, 10, 9, 15]))