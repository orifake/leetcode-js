/**
 * @param {number[]} nums
 * @return {number[]}
 */
const singleNumber = function (nums) {
  let xorAll = 0
  for (let num of nums) {
    xorAll ^= num
  }

  let setBit = xorAll & -xorAll
  let a = 0
  let b = 0

  for (let num of nums) {
    if (num & setBit) {
      a ^= num
    } else {
      b ^= num
    }
  }

  return [a, b]
};

console.log(singleNumber([1, 2, 1, 3, 2, 5]))