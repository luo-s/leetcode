/*
Given an integer array nums and an integer k, return the number of non-empty 
subarrays that have a sum divisible by k.

A subarray is a contiguous part of an array.
*/

// https://leetcode.com/problems/subarray-sums-divisible-by-k/description/

/*
preSum[j] - preSum[i] is divisible by k, then preSum[j] % k == preSum[i] % k
*/
var subarraysDivByK = function (nums, k) {
  let count = new Map(),
    preSum = 0,
    ans = 0;
  count.set(0, 1);
  for (let num of nums) {
    preSum += num;
    const mod = ((preSum % k) + k) % k;
    count.set(mod, (count.get(mod) || 0) + 1);
    ans += count.get(mod) - 1;
  }
  return ans;
};
