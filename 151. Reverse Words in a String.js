/**
 * @param {string} s
 * @return {string}
 */
const reverseWords = function (s) {
  let result = ""
  let right = s.length - 1
  let left = right
  while (right >= 0) {
    if (s[right] === " ") {
      right--
      left--
    }
    while (left >= 0 && s[left] !== " ") {
      left--
    }
    let i = left + 1
    while (i <= right) {
      if (i === left + 1 && result !== "") {
        result += " "
      }
      result += s[i]
      i++
    }
    right = left
  }
  return result
};

console.log(reverseWords("the sky is blue"))