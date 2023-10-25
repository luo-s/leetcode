/*
Given an unsorted array of integers nums, return the length of the longest 
continuous increasing subsequence (i.e. subarray). The subsequence must be 
strictly increasing.

A continuous increasing subsequence is defined by two indices l and r (l < r) 
such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each 
l <= i < r, nums[i] < nums[i + 1].
*/

// https://leetcode.com/problems/longest-continuous-increasing-subsequence/description/

// sliding window
// time complexity O(n)
// space complexity O(1)
var findLengthOfLCIS = function (nums) {
  let left = 0,
    right = 1;
  let count = 1,
    max = 1;
  while (right < nums.length) {
    if (nums[right] > nums[left]) {
      count++;
      left++;
      right++;
    } else {
      max = Math.max(max, count);
      count = 1;
      left = right;
      right++;
    }
  }
  return Math.max(max, count);
};

// sliding window
// time complexity O(n)
// space complexity O(1)
var findLengthOfLCIS = function (nums) {
  let left = 0,
    right = 1;
  let ans = 1;
  while (right < nums.length) {
    if (nums[right] > nums[right - 1]) {
      right++;
    } else {
      ans = Math.max(ans, right - left);
      left = right;
      right++;
    }
  }
  return Math.max(ans, right - left);
};
