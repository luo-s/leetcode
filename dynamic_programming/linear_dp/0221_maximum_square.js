/*
Given an m x n binary matrix filled with 0's and 1's, find the largest 
square containing only 1's and return its area.
*/

// https://leetcode.com/problems/maximal-square/description/

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
