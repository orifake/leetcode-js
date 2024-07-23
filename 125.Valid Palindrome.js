/**
 * @param {string} s
 * @return {boolean}
 */
const isPalindrome = function (s) {
  s = s.replace(/[\W_]/g, '')
  s = s.toLowerCase()
  let left = 0
  let right = s.length - 1
  while (left < right) {
    if (s.charAt(left) !== s.charAt(right)) {
      return false
    }
    right--
    left++
  }
  return true
}

console.log(isPalindrome('ab_a'))
