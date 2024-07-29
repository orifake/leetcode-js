/**
 * @param {character[]} letters
 * @param {character} target
 * @return {character}
 */
const nextGreatestLetter = function (letters, target) {
  if (letters[0] > target || target >= letters[letters.length - 1]) {
    return letters[0]
  }

  let left = 0
  let right = letters.length - 1
  while (left < right) {
    let mid = left + parseInt((right - left) / 2)
    if (letters[mid] <= target) {
      left = mid + 1
    } else {
      right = mid
    }
  }
  return letters[left]
};

console.log(nextGreatestLetter(["c", "f", "j"], "c"))