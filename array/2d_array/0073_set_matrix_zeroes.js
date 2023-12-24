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
  // set all the rows and cols to 0
  for (let k = 0; k < zeroPositions.length; k++) {
    let [row, col] = zeroPositions[k];
    // set row to 0
    for (let j = 0; j < matrix[row].length; j++) {
      matrix[row][j] = 0;
    }
    // set col to 0
    for (let i = 0; i < matrix.length; i++) {
      matrix[i][col] = 0;
    }
  }
};
