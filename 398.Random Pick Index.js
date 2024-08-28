/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
  let count = 0
  let index = -1

  for (let i = 0; i < this.nums.length; i++) {
    if (this.nums[i] !== target) continue

    count += 1
    if (Math.random() < 1 / count) {
      index = i
    }
  }

  return index
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */