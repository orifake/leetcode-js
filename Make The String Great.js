/**
 * @param {string} s
 * @return {string}
 */
const makeGood = function (s) {
  const stack = [s[0]]
  for (let i = 1; i < s.length; i++) {
    const char = s[i]
    const prev = stack[stack.length - 1]
    if (prev && prev !== char && prev.toLowerCase() === char.toLowerCase()) {
      stack.pop()
    } else {
      stack.push(char)
    }
  }
  return stack.join('')
};

console.log(makeGood("leEeetcode"))