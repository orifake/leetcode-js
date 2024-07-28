/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
// [left,right)
const searchInsert = function (nums, target) {
  if (nums.length == 0) return -1;
  let left = 0;
  let right = nums.length;

  while (left < right) { // 注意
    let mid = parseInt(left + (right - left) / 2);
    if (nums[mid] == target) {
      right = mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else if (nums[mid] > target) {
      right = mid; // 注意
    }
  }
  return left;
}

console.log(searchInsert([1, 3, 5, 6], 2))