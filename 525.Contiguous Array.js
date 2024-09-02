/**
 * @param {number[]} nums
 * @return {number}
 */
const findMaxLength = function (nums) {
  const map = new Map()
  let sum = 0
  let result = 0
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i] === 0 ? -1 : 1
    if (sum === 0) {
      result = i + 1
    } else if (map.has(sum)) {
      result = Math.max(result, i - map.get(sum))
    } else {
      map.set(sum, i)
    }
  }
  return result
}

console.log(findMaxLength([0, 1, 0]))