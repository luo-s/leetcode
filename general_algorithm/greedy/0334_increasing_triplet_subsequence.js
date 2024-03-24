/*
Given an integer array nums, return true if there exists a triple of 
indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.
*/

// https://leetcode.com/problems/increasing-triplet-subsequence/description/

/* dynamic programming -- time limit exceeded
let dp[i] be the longest increasing subsequence that ending at nums[i] 
that is strictly increasing.
dp[i] = max(dp[i], dp[j]+ 1) for all k < i and nums[j] < nums[i].
*/
// time complexity: O(n^2)
// space complexity: O(n)
var increasingTriplet = function (nums) {
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp) >= 3;
};
