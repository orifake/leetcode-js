/**
 * @param {number[]} nums
 * @return {number}
 */
const jump = function (nums) {
  let current_end = 0 // 当前跳跃范围的终点
  let current_max = 0 // 当前跳跃范围内能到达的最远位置
  let jumps = 0
  for (let i = 0; i < nums.length - 1; i++) {
    current_max = Math.max(current_max, nums[i] + i)
    if (current_end === i) {
      jumps++;
      current_end = current_max;
      console.log(`Jump ${jumps}: Reached index ${i}, cover is now ${current_max}`);
    }
  }
  return jumps;
}

console.log(jump([2, 3, 1, 1, 4])) // Output: 2