/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
const removeElement = function (nums, val) {
  let slow = 0
  let fast = 0
  while (fast < nums.length) {
    if (nums[fast] !== val) {
      nums[slow] = nums[fast]
      slow++
    }
    fast++
  }
  return slow;
};


console.log(removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2))