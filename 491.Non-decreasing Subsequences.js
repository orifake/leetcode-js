/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const findSubsequences = function (nums) {
  let result = []
  let map = {}
  let iterate = (index, temp) => {
    if (map[temp]) return
    if (temp.length >= 2) {
      result.push(temp)
    }
    for (let i = index; i < nums.length; i++) {
      if (temp[temp.length - 1] > nums[i]) continue
      map[temp] = true
      iterate(i + 1, [...temp, nums[i]])
    }
  }
  iterate(0, [])
  return result
};

console.log(findSubsequences([4, 6, 7, 7]))