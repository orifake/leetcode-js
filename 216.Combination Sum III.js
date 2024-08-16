/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum3 = function (k, n) {
  const result = []
  if (k > n) {
    return []
  }

  function backtrack(index, comb, total) {
    if (total === n && comb.length === k) {
      result.push([...comb]);
      return
    }

    if (total > n || comb.length === k) {
      return
    }

    for (let i = index; i <= 9; i++) {
      comb.push(i)
      backtrack(i + 1, comb, total + i)
      comb.pop()
    }
  }

  backtrack(1, [], 0)
  return result
};

console.log(combinationSum3(3, 7))