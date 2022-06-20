/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */
const reverseStr = function (s, k) {
  let newStr = "";

  let i;
  for (i = 2 * k; i < s.length; i += 2 * k) {
    for (let j = i - k - 1; j >= i - (2 * k); j--) {
      newStr += s[j]
    }
    for (let j = i - k; j < i; j++) {
      newStr += s[j]
    }
  }

  i = i - 2 * k;

  let j = s.length >= i + k ? i + k - 1 : s.length - 1;
  while (j >= i) {
    newStr += s[j]
    j--
  }

  i = i + k
  while (i < s.length) {
    newStr += s[i]
    i++;
  }

  return newStr
};