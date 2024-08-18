/**
 * @param {number[]} nums
 * @return {number[]}
 */

const productExceptSelf = function (nums) {
  const n = nums.length
  const result = []

  const left = new Array(n).fill(1)
  const right = new Array(n).fill(1)

  // Calculate the product of all elements to the left 
  //of each element
  for (let i = 1; i < n; i++) {
    left[i] = left[i - 1] * nums[i - 1]
  }

  // Calculate the product of all elements to the right 
  //of each element
  for (let i = n - 2; i >= 0; i--) {
    right[i] = right[i + 1] * nums[i + 1]
  }

  for (let i = 0; i < n; i++) {
    result[i] = left[i] * right[i]
  }

  return result;
};

console.log(productExceptSelf([-1, 1, 0, -3, 3]))