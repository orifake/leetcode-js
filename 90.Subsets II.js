/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const subsetsWithDup = function (nums) {
  const result = []
  nums.sort((a, b) => a - b)

  const backtrack = (index, temp) => {
    result.push([...temp])

    for (let i = index; i < nums.length; i++) {
      if (i !== index && nums[i] === nums[i - 1]) continue;
      temp.push(nums[i])
      backtrack(i + 1, temp)
      temp.pop()
    }
  }
  backtrack(0, [])
  return result
};

console.log(subsetsWithDup([1, 2, 2]))