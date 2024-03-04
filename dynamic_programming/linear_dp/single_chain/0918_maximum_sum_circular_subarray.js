/*
Given a circular integer array nums of length n, 
return the maximum possible sum of a non-empty subarray of nums.

A circular array means the end of the array connects to the beginning of 
the array. Formally, the next element of nums[i] is nums[(i + 1) % n] and 
the previous element of nums[i] is nums[(i - 1 + n) % n].

A subarray may only include each element of the fixed buffer nums at most once. 
Formally, for a subarray nums[i], nums[i + 1], ..., nums[j], there does not 
exist i <= k1, k2 <= j with k1 % n == k2 % n.

n == nums.length
1 <= n <= 3 * 10^4
-3 * 10^4 <= nums[i] <= 3 * 10^4
*/

// https://leetcode.com/problems/maximum-sum-circular-subarray/

// ciruclar: nums[n-1] -> nums[0]
// brute force: for each subarray, calculate the sum, and find the max
// time complexity: O(n^2)
// space complexity: O(n)
var maxSubarraySumCircular = function (nums) {
  var maxSubArray = function (nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    for (let i = 1; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1] + nums[i], nums[i]);
    }
    return Math.max(...dp);
  };
  let max = -Infinity,
    subarray = nums.concat(nums);
  for (let i = 0; i < nums.length; i++) {
    max = Math.max(max, maxSubArray(subarray.slice(i, i + nums.length)));
  }
  return max;
};
