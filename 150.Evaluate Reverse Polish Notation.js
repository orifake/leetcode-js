/**
 * @param {string[]} tokens
 * @return {number}
 */
const evalRPN = function (tokens) {
  const stack = []
  for (let token of tokens) {
    let val = Number(token)
    if (!isNaN(val)) {
      stack.push(val)
    } else {
      const val1 = stack.pop()
      const val2 = stack.pop()
      let out
      switch (token) {
        case '*':
          out = val2 * val1
          break;
        case '+':
          out = val2 + val1
          break;
        case '-':
          out = val2 - val1
          break;
        case '/':
          out = Math.trunc(val2 / val1)
          break;

      }
      stack.push(out)
    }
  }
  return stack.pop()
};

console.log(evalRPN(["4", "13", "5", "/", "+"]))