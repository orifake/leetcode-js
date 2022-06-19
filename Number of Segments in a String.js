/**
 * @param {string} s
 * @return {number}
 */
const countSegments = function (s) {
  let ans = Number(s.length && s[s.length - 1] !== ' ')
  for (let i = 1; i < s.length; i++) {
    if (s[i] === ' ' && s[i - 1] !== ' ') {
      ans += 1
    }
  }
  return ans
};

console.log(countSegments("a, bb, cc, cc#, "))