/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)
  let closest = Infinity
  for (let i = 0; i < nums.length - 2; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue

    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]
      if (sum === target) {
        return sum
      }
      closest = Math.abs(target - closest) < Math.abs(target - sum) ? closest : sum
      if (sum < target) {
        left++
      } else {
        right--
      }
    }
  }
  return closest
};

console.log(threeSumClosest([-1, 2, 1, -4], 1))