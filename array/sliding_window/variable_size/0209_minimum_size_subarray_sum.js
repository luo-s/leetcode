/*
Given an array of positive integers nums and a positive integer target, return the
minimal length of a subarray whose sum is greater than or equal to target. 
If there is no such subarray, return 0 instead.
*/

// https://leetcode.com/problems/minimum-size-subarray-sum/

// sliding window
// time complexity O(n)
// space complexity O(1)
var minSubArrayLen = function (target, nums) {
  let left = 0,
    right = 0;
  let sum = 0;
  let ans = nums.length;
  while (right < nums.length) {
    sum += nums[right];
    if (sum < target) {
      right++;
    } else {
      ans = Math.min(ans, right - left + 1);
      sum -= nums[left];
      sum -= nums[right];
      left++;
    }
  }
  return !left ? 0 : ans;
};
