export function minPathSum(grid: number[][]): number {
  const memo = Array.from({ length: grid.length }, () => Array.from({ length: grid[0].length }, () => 0));

  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      let top = NaN;
      let left = NaN;

      if (i > 0) {
        top = memo[i - 1][j];
      }

      if (j > 0) {
        left = memo[i][j - 1];
      }

      const curr = grid[i][j];
      
      if (!isNaN(top) && !isNaN(left)) {
        memo[i][j] = Math.min(top, left) + curr;
      } else if (isNaN(top) && isNaN(left)) {
        memo[i][j] = curr
      } else if (isNaN(top)) {
        memo[i][j] = left + curr
      } else if (isNaN(left)) {
        memo[i][j] = top + curr
      } 
    }
  }

  return memo[grid.length - 1][grid[0].length - 1];
}
