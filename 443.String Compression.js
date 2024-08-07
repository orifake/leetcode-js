/**
 * @param {character[]} chars
 * @return {number}
 */
const compress = function (chars) {
  if (!chars.length) return 0

  let index = 0;
  let slow = 0
  while (slow < chars.length) {
    let fast = slow
    while (fast < chars.length && chars[slow] === chars[fast]) {
      fast++
    }
    chars[index++] = chars[slow]

    if (fast - slow > 1) {
      let count = fast - slow;
      for (let digit of count.toString()) {
        chars[index++] = digit;
      }
    }
    slow = fast;
  }

  return index
};

console.log(compress(["a", "a", "b", "b", "c", "c", "c"]))