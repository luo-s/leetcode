/*
Given an integer array nums and an integer k, 
return true if nums has a good subarray or false otherwise.

A good subarray is a subarray where:

1) its length is at least two, and
2) the sum of the elements of the subarray is a multiple of k.

Note that:

A subarray is a contiguous part of the array.
0 is always a multiple of k.

1 <= nums.length <= 10^5
0 <= nums[i] <= 10^9
0 <= sum(nums[i]) <= 2^31 - 1
1 <= k <= 2^31 - 1
*/

// https://leetcode.com/problems/continuous-subarray-sum/description/

// if there is subarray that sum is divisible by k and length >= 2
var checkSubarraySum = function (nums, k) {
  if (nums.length < 2) return false;
  let preSum = 0,
    map = new Map();
  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0 && nums[i + 1] === 0) return true;
    if (nums[i] === 0) continue;
    preSum += nums[i];
    let key = preSum % k;
    if (map.has(key)) {
      if (i - map.get(key) > 1) return true;
    } else {
      map.set(key, i);
    }
  }
  return false;
};
