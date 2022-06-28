/**
 * @param {number[][]} grid
 * @return {number}
 */
const islandPerimeter = function (grid) {
  if (!grid) return 0
  let ans = 0
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) {
        ans += 4
        if (i > 0 && grid[i - 1][j] == 1) {
          ans -= 2
        }
        if (j > 0 && grid[i][j - 1] == 1) {
          ans -= 2
        }
      }
    }
  }
  return ans
};

console.log(islandPerimeter([[0, 1, 0, 0], [1, 1, 1, 0], [0, 1, 0, 0], [1, 1, 0, 0]]))