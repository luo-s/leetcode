/*
Given an m x n matrix mat, return an array of all the elements of the array in a 
diagonal order.

m == mat.length
n == mat[i].length
1 <= m, n <= 10 ** 4
1 <= m * n <= 10 ** 4
-10 ** 5 <= mat[i][j] <= 10 **5
*/

// https://leetcode.com/problems/diagonal-traverse/

// brute force
// time complexity: O(m*n)
// space complexity: O(m*n)
var findDiagonalOrder = function (mat) {
  let ans = [],
    m = mat.length,
    n = mat[0].length,
    row = 0,
    col = 0,
    upRight = true;
  while (row + col < m + n - 2) {
    if (upRight) {
      while (row >= 0) {
        if (row >= m || col >= n) {
          row--;
          col++;
          continue;
        }
        ans.push(mat[row][col]);
        row--;
        col++;
      }
      upRight = false;
      row++;
    } else {
      while (col >= 0) {
        if (row >= m || col >= n) {
          row++;
          col--;
          continue;
        }
        ans.push(mat[row][col]);
        row++;
        col--;
      }
      upRight = true;
      col++;
    }
  }
  ans.push(mat[m - 1][n - 1]);
  return ans;
};
