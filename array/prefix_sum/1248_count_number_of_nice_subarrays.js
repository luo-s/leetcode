/*
Given an array of integers nums and an integer k. 
A continuous subarray is called nice if there are k odd numbers on it.

Return the number of nice sub-arrays.
*/

// https://leetcode.com/problems/count-number-of-nice-subarrays/

var numberOfSubarrays = function (nums, k) {
  let count = new Map(),
    preOdd = 0,
    ans = 0;
  for (let i = 0; i < nums.length; i++) {
    count.set(preOdd, (count.get(preOdd) || 0) + 1);
    if (nums[i] % 2) preOdd += 1;
    ans += count.get(preOdd - k) || 0;
  }
  return ans;
};
