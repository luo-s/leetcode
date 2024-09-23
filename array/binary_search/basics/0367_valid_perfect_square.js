/*
Given a positive integer num, return true if num is a perfect square or false otherwise.

A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

You must not use any built-in library function, such as sqrt.
*/

// https://leetcode.com/problems/valid-perfect-square/

// binary search
// time complexity O(logn)
// space complexity O(1)
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let left = 1,
    right = num;
  while (left <= right) {
    let mid = Math.floor(left + (right - left) / 2);
    let square = mid * mid;
    if (square === num) {
      return true;
    } else if (square < num) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return false;
};

// binary search
var isPerfectSquare = function (num) {
  if (num < 2) return true;
  let left = 1,
    right = num;
  while (left < right) {
    let mid = Math.floor(left + (right - left) / 2);
    let square = mid * mid;
    if (square === num) return true;
    if (square < num) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return false;
};
