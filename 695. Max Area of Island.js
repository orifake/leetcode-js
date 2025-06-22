/**
 * @param {number[][]} grid
 * @return {number}
 */
const maxAreaOfIsland = function(grid) {
  if (!grid.length || !grid[0].length) {
    return 0
  }
  const rows = grid.length
  const cols = grid[0].length
  let result = 0

  const dfs = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols || grid[row][col] !== 1) return 0
    grid[row][col] = 0 // Mark as visited
    let area = 1 // Count this cell

    // Explore all four directions
    area += dfs(row - 1, col)
    area += dfs(row + 1, col)
    area += dfs(row, col - 1)
    area += dfs(row, col + 1)

    return area
  }
  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (grid[row][col] === 1) {
        const area = dfs(row, col)
        result = Math.max(result, area)
      }
    }
  }
  return result
};