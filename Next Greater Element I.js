/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
const nextGreaterElement = function (nums1, nums2) {
  const m = {}
  const st = []
  const ans = []
  nums2.forEach((num) => {
    while (st.length && st[st.length - 1] < num) {
      m[st.pop()] = num
    }
    st.push(num)
  })

  nums1.forEach((num) => {
    ans.push(m[num] || -1)
  })

  return ans
};

console.log(nextGreaterElement([4, 1, 2], [1, 3, 4, 2]))