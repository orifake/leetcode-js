/**
 * @param {string[]} ops
 * @return {number}
 */
const calPoints = function (ops) {
  const stack = []
  ops.forEach((op) => {
    if (op === '+') {
      stack.push(stack[stack.length - 1] + stack[stack.length - 2])
    } else if (op === 'C') {
      stack.pop()
    } else if (op === 'D') {
      stack.push(2 * stack[stack.length - 1])
    } else {
      stack.push(op * 1)
    }
  })
  return stack.reduce((a, b) => a + b, 0)
};