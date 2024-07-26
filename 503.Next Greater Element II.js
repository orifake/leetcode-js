/**
 * @param {number[]} nums
 * @return {number[]}
 */
const nextGreaterElements = function (nums) {
  let n = nums.length
  let result = new Array(n)
  let stack = []
  // 数组长度加倍模拟环形数组
  for (let i = 2 * n - 1; i >= 0; i--) {
    // 索引 i 要求模，其他的和模板一样
    while (stack.length !== 0 && stack[stack.length - 1] <= nums[i]) {
      stack.pop()
    }
    result[i % n] = stack.length === 0 ? -1 : stack[stack.length - 1]
    stack.push(nums[i % n])
  }
  return result
}

console.log(nextGreaterElements([1, 2, 3, 4, 3]))