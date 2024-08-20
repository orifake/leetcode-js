class BIT {
  constructor(N) {
    this.stree = new Array(N + 1).fill(0)
  }

  increase(i, x) {
    while (i < this.stree.length) {
      this.stree[i] += x
      i |= (i + 1)
    }
  }

  total(i) {
    let sum = 0

    while (i >= 0) {
      sum += this.stree[i]
      i &= i + 1
      i -= 1
    }

    return sum
  }
}

const NumArray = function (nums) {
  this.bit = new BIT(nums.length)

  for (let i = 0; i < nums.length; i++) {
    const curr = nums[i]

    this.bit.increase(i + 1, curr)
  }

  this.nums = nums
};

/** 
* @param {number} index 
* @param {number} val
* @return {void}
*/
NumArray.prototype.update = function (index, val) {
  const delta = val - this.nums[index]

  this.bit.increase(index + 1, delta)
  this.nums[index] += delta
};

/** 
* @param {number} left 
* @param {number} right
* @return {number}
*/
NumArray.prototype.sumRange = function (left, right) {
  return this.bit.total(right + 1) - this.bit.total(left)
};