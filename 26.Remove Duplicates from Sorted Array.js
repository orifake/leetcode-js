/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
const removeDuplicates = function (nums) {
  if (nums.length === 0) return 0
  let slow = 0
  let fast = 1
  while (fast < nums.length) {
    if (nums[slow] !== nums[fast]) {
      slow++
      nums[slow] = nums[fast]
    }
    fast++
  }
  return slow + 1;
};
