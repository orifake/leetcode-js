/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
const matrixReshape = function (mat, r, c) {
  let arr = mat.flat()
  if (r * c != arr.length) return mat

  let result = []
  while (arr.length) {
    result.push(arr.splice(0, c))
  };
  return result
};