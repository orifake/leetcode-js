/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
const twoSum = function (nums, target) {
  const hashMap = new Map()
  for (let i = 0; i < nums.length; i++) {
    const num = nums[i]
    let complement = target - num
    if (hashMap.has(complement)) {
      return [hashMap.get(complement), i]
    } else {
      hashMap.set(num, i)
    }
  }
}


console.log(twoSum([2, 7, 11, 15], 9))