/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum2 = function (candidates, target) {
  const result = [];
  candidates.sort((a, b) => a - b);
  function backtrack(index, comb, total) {
    if (total === target) {
      result.push([...comb]);
      return
    }

    if (total > target || index >= candidates.length) {
      return
    }

    for (let i = index; i < candidates.length; i++) {
      if (i > index && candidates[i - 1] === candidates[i]) continue
      comb.push(candidates[i])
      backtrack(i + 1, comb, total + candidates[i])
      comb.pop()
    }
  }

  backtrack(0, [], 0)
  return result
};

console.log(combinationSum2([10, 1, 2, 7, 6, 1, 5], 8))