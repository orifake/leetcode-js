/**
 * @param {number[]} nums
 * @return {number[]}
 */
const majorityElement = function (nums) {
  let map = {}
  let result = []
  for (let num of nums) {
    if (!map[num]) {
      map[num] = 1
    } else {
      map[num]++
    }
  }
  let limit = nums.length / 3
  Object.keys(map).forEach((key) => {
    if (map[key] > limit) {
      result.push(Number(key))
    }
  })

  return result
};

console.log(majorityElement([1, 2]))