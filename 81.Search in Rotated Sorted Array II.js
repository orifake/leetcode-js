/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const search = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    let mid = parseInt(left + (right - left) / 2)
    if (nums[mid] === target) {
      return true
    }

    if (nums[left] === nums[mid]) {
      left++
      continue
    }

    if (nums[left] <= nums[mid]) {
      if (nums[left] <= target && target <= nums[mid]) {
        right = mid - 1
      } else {
        left = mid + 1
      }
    } else {
      if (nums[mid] <= target && target <= nums[right]) {
        left = mid + 1
      } else {
        right = mid - 1
      }
    }
  }

  return false
}

console.log(search([1, 0, 1, 1, 1], 0))