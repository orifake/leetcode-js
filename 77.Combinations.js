/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
const combine = function (n, k) {
  const result = []

  const backtrack = (start, count, combination) => {
    if (count === 0) {
      result.push([...combination])
      return
    }
    for (let i = start; i <= n; i++) {
      combination.push(i)
      backtrack(i + 1, count - 1, combination)
      combination.pop()
    }
  }

  backtrack(1, k, [])
  return result
};

console.log(combine(4, 2))