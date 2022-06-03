/**
 *  Time: O(n)
 *  Space: O(1)
 */

/**
 * @param {string} s
 * @return {number}
 */
const romanToInt = function (s) {
  const hash = {
    I: 1,
    X: 10,
    C: 100,
    M: 1000,
    V: 5,
    L: 50,
    D: 500
  };

  let sum = 0;
  let roman, nextRoman;

  for (let i = 0, len = s.length; i < len; i++) {
    roman = hash[s[i]];
    nextRoman = i + 1 === len ? 0 : hash[s[i + 1]];

    if (nextRoman > roman) {
      sum += nextRoman - roman;
      i++;
    } else
      sum += roman;
  }
  return sum;
};
