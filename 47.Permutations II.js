/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permuteUnique = function (nums) {
  let len = nums.length
  let result = []
  let track = []
  let used = Array(len).fill(false);

  nums = nums.sort((a, b) => a - b);

  if (!len) return []
  const backtrack = () => {
    if (track.length === nums.length) {
      result.push([...track])
      return
    }

    for (let i = 0; i < nums.length; i++) {
      // 排除不合法的选择
      if (used[i]) {
        continue
      }
      if (nums[i] === nums[i - 1] && !used[i - 1]) {
        continue
      }

      track.push(nums[i])
      used[i] = true
      backtrack(nums, track)
      track.pop()
      used[i] = false
    }
  }
  backtrack()
  return result
}


console.log(permute([1, 1, 2]))