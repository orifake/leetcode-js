/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const searchRange = function (nums, target) {
  if (nums.length == 0) return [-1, -1]
  const left = leftBound(nums, target)
  const right = rightBound(nums, target)
  return [left, right]
};

const leftBound = function (nums, target) {
  let left = 0
  let right = nums.length

  while (left < right) {
    let mid = parseInt(left + (right - left) / 2)
    if (nums[mid] === target) {
      right = mid
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid
    }
  }
  return nums[left] === target ? left : -1
}

const rightBound = function (nums, target) {
  let left = 0
  let right = nums.length
  while (left < right) {
    let mid = parseInt(left + (right - left) / 2)
    if (nums[mid] === target) {
      left = mid + 1
    } else if (nums[mid] < target) {
      left = mid + 1
    } else if (nums[mid] > target) {
      right = mid
    }
  }
  return nums[left - 1] === target ? (left - 1) : -1
}

console.log(searchRange([5, 7, 7, 8, 8, 10], 8))
console.log(searchRange([5, 7, 7, 8, 8, 10], 6))
