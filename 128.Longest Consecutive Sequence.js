/**
 * @param {number[]} nums
 * @return {number}
 */
const longestConsecutive = function (nums) {
  if (nums.length === 0) return 0
  const set = new Set(nums)
  let result = 1

  for (let num of nums) {
    let count = 1
    if (!set.has(num - 1)) {
      let x = num
      while (set.has(x + 1)) {
        count++
        x++
      }
    }
    result = Math.max(result, count)
  }

  return result
};

console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))