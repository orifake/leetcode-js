/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let end = 0
  let cover = 0
  let jumps = 0
  for (let i = 0; i < nums.length - 1; i++) {
    cover = Math.max(cover, nums[i] + i)
    if (end === i) {
      jumps++;
      end = cover;
    }
  }
  return jumps;
}
