/**
 * @param {number[]} nums
 */
const Solution = function (nums) {
  this.nums = nums
};

/**
 * @return {number[]}
 */
Solution.prototype.reset = function () {
  return this.nums
};

/**
 * @return {number[]}
 */
Solution.prototype.shuffle = function () {
  const random = [...this.nums]
  for (let i = 0; i < random.length; i++) {
    const j = Math.floor(Math.random() * random.length);
    [random[i], random[j]] = [random[j], random[i]]
  }
  return random;
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.reset()
 * var param_2 = obj.shuffle()
 */