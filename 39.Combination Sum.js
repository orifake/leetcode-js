/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
const combinationSum = function (candidates, target) {
  const result = [];

  function backtrack(index, comb, total) {
    if (total === target) {
      result.push([...comb]);
      return
    }

    if (total > target || index >= candidates.length) {
      return
    }

    comb.push(candidates[index])
    backtrack(index, comb, total + candidates[index])
    comb.pop()
    backtrack(index + 1, comb, total)
  }

  backtrack(0, [], 0)
  return result
};

console.log(combinationSum([2, 3, 5], 8))