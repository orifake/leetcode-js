/**
 *  Time: O(1)
 *  Space: O(1)
 */

/**
 * @param {number} num
 * @return {string}
 */
const convertToBase7 = function (num) {
  if (num === 0) return "0"
  let new_num = Math.abs(num)
  let ans = "";
  while (new_num) {
    ans = String(new_num % 7) + ans;
    new_num = ~~(new_num / 7)
  }
  return num > 0 ? ans : "-" + ans
};