/*
Given an integer array nums, find the subarray with the largest sum, 
and return its sum.

A subarray is a contiguous non-empty sequence of elements within an array.

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
*/

// brute force -- TLE
// time complexity: O(n^2)
// space complexity: O(1)
var maxSubArray = function (nums) {
  let max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      max = Math.max(max, sum);
    }
  }
  return max;
};
