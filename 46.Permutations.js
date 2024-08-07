/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  let len = nums.length
  let result = []
  let track = []

  let used = Array(len).fill(false);

  if (!len) return []
  const backtrack = () => {
    if (track.length === len) {
      result.push([...track])
      return
    }
    for (let i = 0; i < len; i++) {
      if (used[i]) {
        continue
      }
      track.push(nums[i])
      used[i] = true
      backtrack()
      track.pop()
      used[i] = false
    }
  }
  backtrack(track, used)
  return result
}


console.log(permute([1, 2, 3]))