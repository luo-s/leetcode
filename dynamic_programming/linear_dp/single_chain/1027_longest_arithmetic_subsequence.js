/*
Given an array nums of integers, return the length of the longest arithmetic 
subsequence in nums.

Note that:

A subsequence is an array that can be derived from another array by deleting 
some or no elements without changing the order of the remaining elements.

A sequence seq is arithmetic if seq[i + 1] - seq[i] are all the same value 
(for 0 <= i < seq.length - 1).

2 <= nums.length <= 1000
0 <= nums[i] <= 500
*/

// https://leetcode.com/problems/longest-arithmetic-subsequence/description/
// related: https://leetcode.com/problems/length-of-longest-fibonacci-subsequence/description/

/*
how to identify a subsequence with a certain difference?
we need at least 2 elements to form a subsequence (2 pointers)
let dp[i][j] be the length of the longest arithmetic subsequence ending with
nums[i] and nums[j] with the difference nums[j] - nums[i]
dp[j][k] = max(dp[j][k], dp[i][j] + 1) for every i, j, k that 
0 <= i < j < k < nums.length that nums[j] - nums[i] == nums[k] - nums[j]
*/

// brute force -- time limit exceeded
var longestArithSeqLength = function (nums) {
  // corner case
  if (nums.length === 2) return 2;
  let dp = new Array(nums.length)
    .fill()
    .map(() => new Array(nums.length).fill(2));
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        if (nums[j] - nums[i] === nums[k] - nums[j]) {
          dp[j][k] = Math.max(dp[j][k], dp[i][j] + 1);
        }
      }
    }
  }
  return Math.max(...dp.map((row) => Math.max(...row)));
};
