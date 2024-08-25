/**
 * @param {number} a
 * @param {number[]} b
 * @return {number}
 */
const superPow = function (a, b) {
  let bInt = BigInt(b.join(""))
  let m = 1337
  let result = 1
  a = a % m
  while (bInt > 0) {
    if (Number(bInt % 2n) === 1) result = (result * a) % m
    a = (a * a) % m
    bInt = bInt >> 1n;
  }
  return result
};

console.log(superPow(2, [3]))