/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
const merge = function (nums1, m, nums2, n) {
  let i = m - 1
  let j = n - 1
  let p = nums1.length - 1
  while (i >= 0 && j >= 0) {
    if (nums1[i] > nums2[j]) {
      nums1[p] = nums1[i]
      i--
    } else {
      nums1[p] = nums2[j]
      j--
    }
    p--
  }
  while (j >= 0) {
    nums1[p] = nums2[j]
    j--
    p--
  }
}

const nums1 = [1, 2, 3, 0, 0, 0]
const m = 3
const nums2 = [2, 5, 6] 
const n = 3
merge(nums1, m, nums2, n)
console.log(nums1) // Output: [1, 2, 2, 3, 5, 6]
