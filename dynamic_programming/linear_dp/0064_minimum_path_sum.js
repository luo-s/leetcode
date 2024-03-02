/*
Given a m x n grid filled with non-negative numbers, find a path from top 
left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.
*/

// https://leetcode.com/problems/minimum-path-sum/

// let dp[i][j] be the minimum path sum to reach [i, j]
// dp[i][j] = Math.min(dp[i-1][j], dp[i][j-1]) + grid[i][j]
var minPathSum = function (grid) {
  let dp = new Array(grid.length + 1)
    .fill()
    .map(() => new Array(grid[0].length + 1).fill(Infinity));
  for (let i = 1; i < grid.length + 1; i++) {
    for (let j = 1; j < grid[0].length + 1; j++) {
      if (i === 1 && j === 1) dp[i][j] = grid[i - 1][j - 1];
      else dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1]) + grid[i - 1][j - 1];
    }
  }
  return dp[grid.length][grid[0].length];
};
