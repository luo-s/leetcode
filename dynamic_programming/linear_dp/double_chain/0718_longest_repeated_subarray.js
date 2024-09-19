/*
Given two integer arrays nums1 and nums2, return the maximum length of a 
subarray that appears in both arrays.

A subarray is a contiguous non-empty sequence of elements within an array.

1 <= nums1.length, nums2.length <= 1000
0 <= nums1[i], nums2[i] <= 100
*/

// https://leetcode.com/problems/maximum-length-of-repeated-subarray/
// related: https://leetcode.com/problems/maximal-square/

// let dp[i][j] be the length of the longest common subarray of
// nums1[0:i) and nums2[0:j)
// if (nums1[i] === nums2[j]) dp[i][j] = dp[i-1][j-1] + 1
// else dp[i][j] === 0 (no common subarray)
var findLength = function (nums1, nums2) {
  if (nums1.length === 0 || nums2.length === 0) return 0;
  let dp = Array(nums1.length + 1)
    .fill()
    .map(() => Array(nums2.length + 1).fill(0));
  let max = 0;
  for (let i = 1; i < nums1.length + 1; i++) {
    for (let j = 1; j < nums2.length + 1; j++) {
      if (nums1[i - 1] === nums2[j - 1]) dp[i][j] = dp[i - 1][j - 1] + 1;
      else dp[i][j] = 0;
      max = Math.max(max, dp[i][j]);
    }
  }
  return max;
};
