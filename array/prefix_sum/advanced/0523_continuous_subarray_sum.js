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

// subarray problems are usually solved by prefix sum
// utilize the property of the remainder of the prefix sum
var checkSubarraySum = function (nums, k) {
  // edge case: if the array length < 2, return false
  if (nums.length < 2) return false;
  let preSum = 0,
    map = new Map();
  // create a map to store preSum % k and its index
  map.set(0, -1);
  for (let i = 0; i < nums.length; i++) {
    // edge case: two 0s in a row, return true
    if (nums[i] === 0 && nums[i + 1] === 0) return true;
    // edge case: zero doesn't change preSum
    if (nums[i] === 0) continue;
    // calculate preSum
    preSum += nums[i];
    // get the remainder of preSum divided by k
    let key = preSum % k;
    // if preSum(i) and preSum(j) have the same remainder, then preSum(i+1, j) is divisible by k
    if (map.has(key)) {
      // if the subarray length >= 2, return true
      if (i - map.get(key) > 1) return true;
    } else {
      // store preSum % k and its index
      map.set(key, i);
    }
  }
  return false;
};
