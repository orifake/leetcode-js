/**
 * @param {number[]} nums
 * @return {boolean}
 */
const canJump = function (nums) {
  let cover = 0
  for (let i = 0; i <= nums.length - 1; i++) {
    if (i > cover) return false
    cover = Math.max(cover, nums[i] + i)
  }
  return true
}

console.log(canJump([2, 3, 1, 1, 4])) // true