/**
 * @param {string} s
 * @param {number} k
 * @return {string}
 */

const reverseStr = function (s, k) {
  const array = s.split("")

  const swap = function (start, end) {
    while (start < end) {
      [array[start], array[end]] = [array[end], array[start]];
      start++;
      end--;
    }
  }

  for (let i = 0; i < s.length - 1; i += (k * 2)) {
    swap(i, Math.min(i + k - 1, array.length - 1))
  }

  return array.join("")
};

console.log(reverseStr("abcdef", 2))