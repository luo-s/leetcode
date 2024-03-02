/*
Given an integer array nums, return the length of the longest strictly 
increasing subsequence.

A subsequence is an array that can be derived from another array by deleting 
some or no elements without changing the order of the remaining elements.

1 <= nums.length <= 2500
-10^4 <= nums[i] <= 10^4
*/

// https://leetcode.com/problems/longest-increasing-subsequence/

// brute force -- TLE
var lengthOfLIS = function (nums) {
  var findLISStartAtIndex = function (nums, index) {
    if (index === nums.length - 1) return 1;
    let maxEndingHere = 1;
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[index] < nums[i]) {
        maxEndingHere = Math.max(
          maxEndingHere,
          1 + findLISStartAtIndex(nums, i)
        );
      }
    }
    return maxEndingHere;
  };
  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, findLISStartAtIndex(nums, i));
  }
  return ans;
};

// memoization
var lengthOfLIS = function (nums) {
  let memo = new Map();
  var findLISStartAtIndex = function (nums, index) {
    if (index === nums.length - 1) return 1;
    if (memo.has(index)) return memo.get(index);
    let max = 1;
    for (let i = index + 1; i < nums.length; i++) {
      if (nums[index] < nums[i]) {
        max = Math.max(max, 1 + findLISStartAtIndex(nums, i));
      }
    }
    memo.set(index, max);
    return max;
  };
  let ans = 1;
  for (let i = 0; i < nums.length; i++) {
    ans = Math.max(ans, findLISStartAtIndex(nums, i));
  }
  return ans;
};

// optimized dynamic programming
// let dp[i] be the length of the LIS that ends with nums[i]
// for every j that 0 <= j < i; if nums[j] < nums[i], dp[i] = max(dp[i], dp[j]+1)
// time complexity: O(n^2)
// space complexity: O(n)
var lengthOfLIS = function (nums) {
  const dp = new Array(nums.length).fill(1);
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp);
};
