/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
const dailyTemperatures = function (temperatures) {
  const n = temperatures.length
  const result = new Array(n)
  const stack = []
  for (i = n - 1; i >= 0; i--) {
    while (stack.length && temperatures[stack[stack.length - 1]] <= temperatures[i]) {
      stack.pop()
    }
    result[i] = stack.length === 0 ? 0 : stack[stack.length - 1] - i
    stack.push(i)
  }
  return result
};

console.log(dailyTemperatures([89,62,70,58,47,47,46,76,100,70]))