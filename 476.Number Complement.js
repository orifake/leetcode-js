/**
 *  Time: O(1)
 *  Space: O(1)
 */

/**
 * @param {number} num
 * @return {number}
 */
const findComplement = function (num) {
  let i = 1;
  while (i <= num) {
    i *= 2
  }
  if (i === num) {
    return i - 1
  } else {
    return i - num - 1
  }
};