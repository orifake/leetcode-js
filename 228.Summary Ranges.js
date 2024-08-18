/**
 * @param {number[]} nums
 * @return {string[]}
 */
const summaryRanges = function (nums) {
  if (!nums) return []
  const result = []
  let start = nums[0]
  for (let i = 1; i <= nums.length; i++) {
    if (nums[i] === nums[i - 1] + 1) continue
    if (start === nums[i - 1]) {
      result.push(`${start}`)
    } else {
      result.push(`${start}->${nums[i - 1]}`)
    }
    start = nums[i]
  }

  return result
};

console.log(summaryRanges([0, 1, 2, 4, 5, 7]))