/*
Given an m x n binary matrix filled with 0's and 1's, find the largest 
square containing only 1's and return its area.

m == matrix.length
n == matrix[i].length
1 <= m, n <= 300
matrix[i][j] is '0' or '1'.
*/

// https://leetcode.com/problems/maximal-square/description/
// related https://leetcode.com/problems/maximum-length-of-repeated-subarray/description/
//

// brute force -- time limit exceeded
// time complexity: O(m * n * min(m, n)^2)
var maximalSquare = function (matrix) {
  var isSquare = function (matrix, i, j, k) {
    // start from [i, j], stop at [i + k, j + k]
    // check square boundary
    if (i + k >= matrix.length) return false;
    if (j + k >= matrix[0].length) return false;
    // check square content
    for (let x = i; x <= i + k; x++) {
      if (j + k >= matrix[0].length) return false;
      for (let y = j; y <= j + k; y++) {
        if (matrix[x][y] === "0") return false;
      }
    }
    return true;
  };
  let max = 0;
  let limit = Math.min(matrix.length, matrix[0].length);
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[0].length; j++) {
      for (let k = 0; k < limit; k++) {
        if (isSquare(matrix, i, j, k)) {
          max = Math.max(max, k + 1);
        }
      }
    }
  }
  return max ** 2;
};

// let dp[i][j] be the max side length where [i, j] is the bottom right corner
// if matrix[i][j] === 0, dp[i][j] = 0
// if matrix[i][j] === 1, dp[i][j] = min(dp[i-1][j], dp[i][j-1], dp[i-1][j-1]) + 1
var maximalSquare = function (matrix) {
  let m = matrix.length,
    n = matrix[0].length;
  let dp = new Array(m + 1).fill().map(() => new Array(n + 1).fill(0));
  let max = 0;
  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i - 1][j - 1] === "0") {
        dp[i][j] = 0;
      } else {
        dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) + 1;
        max = Math.max(max, dp[i][j]);
      }
    }
  }
  return max ** 2;
};
