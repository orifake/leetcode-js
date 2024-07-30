/**
 * @param {number[]} candyType
 * @return {number}
 */
const distributeCandies = function (candyType) {
  const kinds = (new Set(candyType)).size
  const nums = parseInt(candyType.length / 2)
  return (kinds < nums) ? kinds : nums
};

console.log(distributeCandies([1, 1, 2, 2, 3, 3]))
console.log(distributeCandies([6, 6, 6, 6]))