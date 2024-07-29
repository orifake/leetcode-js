/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const lookup = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    let complement = target - num
    if (lookup.has(complement)) {
      return [lookup.get(complement), i]
    } else {
      lookup.set(num, i)
    }
  }
}


console.log(twoSum([2, 7, 11, 15], 9))