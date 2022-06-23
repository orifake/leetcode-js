/**
 * @param {string[]} logs
 * @return {number}
 */
const minOperations = function (logs) {
  let depth = 0
  logs.forEach((cmd) => {
    if (cmd === '../') {
      depth > 0 && (depth -= 1)
    } else if (cmd !== './') {
      depth += 1
    }
  })
  return depth
};

console.log(minOperations(["./", "../", "./"]))