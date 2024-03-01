/*
Given an integer array nums, find the subarray with the largest sum, 
and return its sum.

A subarray is a contiguous non-empty sequence of elements within an array.

1 <= nums.length <= 10^5
-10^4 <= nums[i] <= 10^4
*/

// https://leetcode.com/problems/maximum-subarray/description/

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

// dynamic programming
// dp[i] is the maximum subarray sum ending at index i
// dp[i] = max(dp[i-1] + nums[i], nums[i])
// time complexity: O(n)
// space complexity: O(n)
var maxSubArray = function (nums) {
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
  }
  return Math.max(...dp);
};

// optimized dp
// time complexity: O(n)
// space complexity: O(1)
var maxSubArray = function (nums) {
  for (let i = 1; i < nums.length; i++) {
    nums[i] = Math.max(nums[i], nums[i] + nums[i - 1]);
  }
  return Math.max(...nums);
};

// Kadane's algorithm
// time complexity: O(n)
// space complexity: O(1)
var maxSubArray = function (nums) {
  let sum = 0,
    max = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    sum = Math.max(nums[i], sum + nums[i]);
    max = Math.max(max, sum);
  }
  return max;
};
