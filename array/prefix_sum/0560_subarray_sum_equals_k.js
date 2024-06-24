/*
Given an array of integers nums and an integer k, return the total number of 
subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

// https://leetcode.com/problems/subarray-sum-equals-k/description/
// related https://leetcode.com/problems/binary-subarrays-with-sum/description/

// a n-length array has n*(n+1)/2 subarrays
// brute force requires O(n^2) time complexity
// use prefix sum map to reduce time complexity to O(n)
var subarraySum = function (nums, goal) {
  let cnt = new Map(),
    preSum = 0,
    ans = 0;
  // loop through the array
  for (let i = 0; i < nums.length; i++) {
    // count the times the same preSum appears from nums[0] to nums[n-1]
    cnt.set(preSum, (cnt.get(preSum) || 0) + 1);
    // update the prefix sum
    preSum += nums[i];
    // if the sum of nums[i] to nums[j] equals to goal,
    // then preSum[j] - preSum[i] = goal => preSum[i] = preSum[j] - goal
    // so preSum[i] is the key to find the number of subarrays that satisfy the condition
    // cnt.get(preSum - goal) is the number of subarrays that satisfy the condition
    ans += cnt.get(preSum - goal) || 0;
  }
  return ans;
};
