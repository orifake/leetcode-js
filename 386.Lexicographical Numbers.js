/**
 * @param {number} n
 * @return {number[]}
 */
const lexicalOrder = function (n) {

  function pushFromTo(start, end) {
    while (start <= end && start <= n) {
      result.push(start)
      pushFromTo(start * 10, start * 10 + 9)
      start++
    }

  }
  const result = []
  pushFromTo(1, 9)

  return result
};

console.log(lexicalOrder(13))