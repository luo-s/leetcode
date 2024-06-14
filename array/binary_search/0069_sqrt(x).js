/*
Given a non-negative integer x, return the square root of x rounded down to 
the nearest integer. The returned integer should be non-negative as well.

You must not use any built-in exponent function or operator.

For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.
*/

// https://leetcode.com/problems/sqrtx/

// binary search
// time complexity O(logn)
// space complexity O(1)
var mySqrt = function (x) {
  if (x < 2) return x;
  let left = 1,
    right = x;
  while (left < right) {
    // end condition: left === right
    let mid = Math.floor(left + (right - left) / 2);
    if (mid * mid === x) return mid;
    if (mid * mid < x) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left - 1;
};

// brute force O(n^(0.5))
var mySqrt = function (x) {
  let i = 1;
  while (i * i <= x) {
    i++;
  }
  return i - 1;
};
