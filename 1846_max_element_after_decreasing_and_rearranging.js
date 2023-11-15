/*
You are given an array of positive integers arr. Perform some operations (possibly none) on arr so that it satisfies these conditions:

The value of the first element in arr must be 1.
The absolute difference between any 2 adjacent elements must be less than or equal to 1. In other words, abs(arr[i] - arr[i - 1]) <= 1 for each i where 1 <= i < arr.length (0-indexed). abs(x) is the absolute value of x.
There are 2 types of operations that you can perform any number of times:

Decrease the value of any element of arr to a smaller positive integer.
Rearrange the elements of arr to be in any order.
Return the maximum possible value of an element in arr after performing the operations to satisfy the conditions.
*/

//https://leetcode.com/problems/maximum-element-after-decreasing-and-rearranging/

// sorting
// time complexity O(nlogn)
// space complexity O(1)
var maximumElementAfterDecrementingAndRearranging = function (arr) {
  arr.sort((a, b) => a - b);
  arr[0] = 1;
  for (let i = 1; i < arr.length; i++) {
    if (arr[i] - arr[i - 1] > 1) {
      arr[i] = arr[i - 1] + 1;
    }
    // arr[i] = Math.min(arr[i], arr[i-1] + 1);
  }
  return arr[arr.length - 1];
};
