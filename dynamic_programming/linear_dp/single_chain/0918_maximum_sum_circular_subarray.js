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
// related: https://leetcode.com/problems/maximum-subarray/description/

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

/*
two cases:
1. the max subarray is not circular same as 0053_maximum_subarray
2. the max subarray is circular, thus we need to minimize the mid subarray
*/
var maxSubarraySumCircular = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur),
    dpMax = new Array(nums.length).fill(0),
    dpMin = new Array(nums.length).fill(0);
  (dpMax[0] = nums[0]), (dpMin[0] = nums[0]);
  for (let i = 1; i < nums.length; i++) {
    dpMax[i] = Math.max(dpMax[i - 1] + nums[i], nums[i]);
    dpMin[i] = Math.min(dpMin[i - 1] + nums[i], nums[i]);
  }
  let max = Math.max(...dpMax),
    min = Math.min(...dpMin);
  // corner case: if all elements are negative, min will include all elements
  // sum - min will result in an empty subarray, thus return max;
  return max < 0 ? max : Math.max(max, sum - min);
};

// optimized dp
var maxSubarraySumCircular = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur),
    dpMax = nums[0],
    dpMin = nums[0],
    max = nums[0],
    min = nums[0];
  for (let i = 1; i < nums.length; i++) {
    dpMax = Math.max(dpMax + nums[i], nums[i]);
    dpMin = Math.min(dpMin + nums[i], nums[i]);
    max = Math.max(max, dpMax);
    min = Math.min(min, dpMin);
  }
  return max < 0 ? max : Math.max(max, sum - min);
};
