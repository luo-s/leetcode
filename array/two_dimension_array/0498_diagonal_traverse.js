/*
Given an m x n matrix mat, return an array of all the elements of the array in a 
diagonal order.

m == mat.length
n == mat[i].length
1 <= m, n <= 10 ** 4
1 <= m * n <= 10 ** 4
-10 ** 5 <= mat[i][j] <= 10 **5
*/

// traverse
// time complexity O(n^3)
// space complexity O(m*n)
var findDiagonalOrder = function (mat) {
  let m = mat.length;
  let n = mat[0].length;
  if (m == 1 || n == 1) return mat.flat();
  let ans = [];
  for (let p = 0; p < m + n - 1; p++) {
    if (p % 2) {
      for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
          if (i + j == p) {
            ans.push(mat[i][j]);
          }
        }
      }
    } else {
      for (let j = 0; j < n; j++) {
        for (let i = 0; i < m; i++) {
          if (i + j == p) {
            ans.push(mat[i][j]);
          }
        }
      }
    }
  }
  return ans;
};
