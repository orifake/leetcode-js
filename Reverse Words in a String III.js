/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  return s.split(' ').map((word) => (word.split('').reverse().join(''))).join(' ')
};