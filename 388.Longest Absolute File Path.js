/**
 * @param {string} input
 * @return {number}
 */
const lengthLongestPath = function (input) {
  const dirs = input.split('\n')
  let max = 0
  let depth = 0
  let length = []

  for (let dir of dirs) {
    depth = dir.lastIndexOf('\t') + 1
    if (dir.includes('.')) {
      let fileLength = dir.length - depth;
      max = Math.max((length[depth - 1] + 1 || 0) + fileLength, max);
    } else {
      length[depth] = dir.length - depth + (length[depth - 1] + 1 || 0);
    }
  }

  return max
};

console.log(lengthLongestPath("dir\n\tsubdir1\n\t\tfile1.ext\n\t\tsubsubdir1\n\tsubdir2\n\t\tsubsubdir2\n\t\t\tfile2.ext"))