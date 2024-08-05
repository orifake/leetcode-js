/**
 * @param {number[]} nums
 * @return {number[][]}
 */
const permute = function (nums) {
  let len = nums.length
  let result = []
  let track = []

  let used = Array(nums.length).fill(false);

  if (!len) return []
  const backtrack = (track, used) => {
    if (track.length === len) {
      result.push([...track])
      return
    }
    for (let i = 0; i < nums.length; i++) {
      if (used[i]) {
        continue
      }
      track.push(nums[i])
      used[i] = true
      backtrack(track, used)
      track.pop()
      used[i] = false
    }
  }
  backtrack(track, used)
  return result
}


console.log(permute([1, 2, 3]))