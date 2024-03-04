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
// time complexity: O(n^3)
// space complexity: O(n^2)
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

// optimized dp + hash map
// we can use diff and starting index to represent a subsequence
// diff -> length
// time complexity: O(n^2)
// space complexity: O(n^2)
var longestArithSeqLength = function (nums) {
  if (nums.length === 2) return 2;
  let dp = new Array(nums.length).fill().map(() => new Map());
  dp[1].set(nums[1] - nums[0], 2);
  let max = 2;
  for (let i = 2; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      let diff = nums[i] - nums[j];
      let len = (dp[j].get(diff) || 1) + 1;
      max = Math.max(max, len);
      dp[i].set(diff, len);
    }
  }
  return max;
};
