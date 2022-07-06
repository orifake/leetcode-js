/**
 * @param {string} s
 * @return {string}
 */
const reverseString = function (s) {
  let left = 0
  let right = s.length - 1
  while (left < right) {
    // 交换 s[left] 和 s[right]
    let temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
};