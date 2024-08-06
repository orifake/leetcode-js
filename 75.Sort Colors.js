/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
const sortColors = function (nums) {
  const swap = (i, j) => {
    [nums[i], nums[j]] = [nums[j], nums[i]];
  }

  let left = 0
  let right = nums.length - 1
  let current = left

  while (current <= right) {
    if (nums[current] === 0) {
      swap(left, current)
      left++
      current++
    } else if (nums[current] === 2) {
      swap(right, current)
      right--
    } else {
      current++
    }
  }

  console.log(nums)
};

sortColors([2, 0, 2, 1, 1, 0])