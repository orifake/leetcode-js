/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const hashMap = {}
  const stack = []
  const result = []
  nums2.forEach((num) => {
    while (stack.length && stack[stack.length - 1] < num) {
      hashMap[stack.pop()] = num
    }
    stack.push(num)
  })

  nums1.forEach((num) => {
    result.push(hashMap[num] || -1)
  })

  return result
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))