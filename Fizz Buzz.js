/**
 * @param {number} n
 * @return {string[]}
 */
const fizzBuzz = function (n) {
  const ans = []
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      ans.push("FizzBuzz")
    } else if (i % 5 === 0) {
      ans.push("Buzz")
    } else if (i % 3 === 0) {
      ans.push("Fizz")
    } else {
      ans.push(String(i))
    }
  }
  return ans
};

console.log(fizzBuzz(5))