/*
Given an m x n integer matrix matrix, if an element is 0, 
set its entire row and column to 0's.

You must do it in place.

m == matrix.length
n == matrix[0].length
1 <= m, n <= 200
-2^31 <= matrix[i][j] <= 2^31 - 1
*/

// https://leetcode.com/problems/set-matrix-zeroes/

// brute force
// time: O(m * n)
// space: O(m + n)
var setZeroes = function (matrix) {
  const m = matrix.length,
    n = matrix[0].length;
  const row = new Array(m).fill(false);
  const col = new Array(n).fill(false);
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (matrix[i][j] === 0) {
        row[i] = col[j] = true;
      }
    }
  }
  for (let i = 0; i < m; i++) {
    for (let j = 0; j < n; j++) {
      if (row[i] || col[j]) {
        matrix[i][j] = 0;
      }
    }
  }
};

// brute force
// time: O(m * n)
// space: O(m * n)
var setZeroes = function (matrix) {
  // find all the 0s
  let zeroPositions = [];
  for (let i = 0; i < matrix.length; i++) {
    let row = matrix[i];
    for (let j = 0; j < row.length; j++) {
      if (row[j] === 0) {
        zeroPositions.push([i, j]);
      }
    }
  }
  for (let k = 0; k < zeroPositions.length; k++) {
    let [row, col] = zeroPositions[k];
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
};
