/**
 * @param {number} n
 * @return {number}
 */
const tribonacci = function (n) {
  let num_2 = 0
  let num_1 = 1
  let num = 1
  if (n === 0) return 0
  if (n === 1 || n === 2) return 1
  for (let i = 2; i < n; i++) {
    [num_2, num_1, num] = [num_1, num, num_2 + num_1 + num]
  }
  return num
};

console.log(tribonacci(4))