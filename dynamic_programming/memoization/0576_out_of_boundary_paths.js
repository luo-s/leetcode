/*
There is an m x n grid with a ball. The ball is initially at the position 
[startRow, startColumn]. You are allowed to move the ball to one of the four 
adjacent cells in the grid (possibly out of the grid). 
You can apply at most maxMove moves to the ball.

Given the five integers m, n, maxMove, startRow, startColumn, 
return the number of paths to move the ball out of the grid boundary. 
Since the answer can be very large, return it modulo (10^9 + 7).

1 <= m, n <= 50
0 <= maxMove <= 50
0 <= startRow < m
0 <= startColumn < n
*/
// https://leetcode.com/problems/out-of-boundary-paths/

// dfs
var findPaths = function (m, n, maxMove, startRow, startColumn) {
  let count = 0;
  var dfs = (startRow, startColumn, maxMove) => {
    if (maxMove < 0) return;
    if (startRow < 0 || startRow >= m || startColumn < 0 || startColumn >= n) {
      count++;
      return;
    }
    dfs(startRow - 1, startColumn, maxMove - 1);
    dfs(startRow + 1, startColumn, maxMove - 1);
    dfs(startRow, startColumn - 1, maxMove - 1);
    dfs(startRow, startColumn + 1, maxMove - 1);
  };
  dfs(startRow, startColumn, maxMove);
  return count % (10 ** 9 + 7);
};
