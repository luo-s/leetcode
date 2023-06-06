/*
You are given an m x n integer matrix matrix with the following two properties:

Each row is sorted in non-decreasing order.
The first integer of each row is greater than the last integer of the previous 
row.
Given an integer target, return true if target is in matrix or false otherwise.

You must write a solution in O(log(m * n)) time complexity.
*/

// binery search
var searchMatrix = function (matrix, target) {
  let row = matrix.length;
  let col = matrix[0].length;
  let left = 0;
  let right = row * col - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    const r = Math.floor(mid / col);
    const c = mid % col;
    if (matrix[r][c] < target) {
      left = mid + 1;
    } else if (matrix[r][c] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};

// higher order function -- .flat()
var searchMatrix = function (matrix, target) {
  const array = matrix.flat();
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (array[mid] < target) {
      left = mid + 1;
    } else if (array[mid] > target) {
      right = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
