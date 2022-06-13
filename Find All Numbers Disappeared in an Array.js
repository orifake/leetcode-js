/**
 * @param {number[]} nums
 * @return {number[]}
 */
const findDisappearedNumbers = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = Math.abs(nums[i]) - 1
    nums[temp] > 0 && (nums[temp] *= -1)
  }

  let ans = []
  for (let j = 0; j < nums.length; j++) {
    nums[j] > 0 && ans.push(j + 1)
  }
  return ans
};

console.log(findDisappearedNumbers([4, 3, 2, 7, 8, 2, 3, 1]))