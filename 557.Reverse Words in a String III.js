/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  const chars = s.split("")
  let start = 0
  for (i = 0; i < s.length; i++) {
    if (chars[i] === " " || i === chars.length - 1) {
      let end = (i === chars.length - 1 && chars[i] !== ' ') ? i + 1 : i;
      while (start < end) {
        [chars[start], chars[end - 1]] = [chars[end - 1], chars[start]];
        start++;
        end--;
      }
      start = i + 1;
    }
  }
  return chars.join("")
};