/*
Given an array of integers nums and an integer k, return the total number of 
subarrays whose sum equals to k.

A subarray is a contiguous non-empty sequence of elements within an array.
*/

// https://leetcode.com/problems/subarray-sum-equals-k/description/
// related https://leetcode.com/problems/binary-subarrays-with-sum/description/

var numSubarraysWithSum = function (nums, goal) {
  let cnt = new Map(),
    preSum = 0,
    ans = 0;
  // loop through the array
  for (const num of nums) {
    // count the prefix sum
    cnt.set(preSum, (cnt.get(preSum) || 0) + 1);
    // update the prefix sum
    preSum += num;
    // cnt.get(preSum - goal) is the number of subarrays that satisfy the condition
    ans += cnt.get(preSum - goal) || 0;
  }
  return ans;
};
