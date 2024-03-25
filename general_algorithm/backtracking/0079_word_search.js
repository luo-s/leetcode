/*
Given an m x n grid of characters board and a string word, return true if 
word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, 
where adjacent cells are horizontally or vertically neighboring. 
The same letter cell may not be used more than once.
*/

// https://leetcode.com/problems/word-search/description/

var exist = function (board, word) {
  let m = board.length,
    n = board[0].length;
  var dfs = function (i, j, index, visited) {
    if (
      i < 0 ||
      j < 0 ||
      i >= m ||
      j >= n ||
      board[i][j] !== word[index] ||
      visited[i][j]
    )
      return false;
    if (index === word.length - 1) return true;
    visited[i][j] = true;
    let res =
      dfs(i + 1, j, index + 1, visited) ||
      dfs(i - 1, j, index + 1, visited) ||
      dfs(i, j + 1, index + 1, visited) ||
      dfs(i, j - 1, index + 1, visited);
    visited[i][j] = false;
    return res;
  };
  visited = new Array(m).fill(0).map(() => new Array(n).fill(false));
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (dfs(i, j, 0, visited)) return true;
    }
  }
  return false;
};
