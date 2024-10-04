/*
Given an integer array nums, return true if there exists a triple of 
indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. 
If no such indices exists, return false.
*/

// https://leetcode.com/problems/increasing-triplet-subsequence/description/

/* dynamic programming -- time limit exceeded
let dp[i] be the longest increasing subsequence that ending at nums[i] 
that is strictly increasing.
dp[i] = max(dp[i], dp[j]+ 1) for all k < i and nums[j] < nums[i].
*/
// time complexity: O(n^2)
// space complexity: O(n)
var increasingTriplet = function (nums) {
  let dp = new Array(nums.length).fill(1);
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (nums[j] < nums[i]) {
        dp[i] = Math.max(dp[i], dp[j] + 1);
      }
    }
  }
  return Math.max(...dp) >= 3;
};

// optimized solution
// time complexity: O(n)
// space complexity: O(1)
var increasingTriplet = function (nums) {
  let triplet = [];
  for (let i = 0; i < nums.length; i++) {
    if (triplet.length === 0) {
      triplet.push(nums[i]);
    }
    if (triplet.length === 1) {
      if (nums[i] > triplet[0]) {
        triplet.push(nums[i]);
      } else {
        triplet[0] = nums[i];
      }
    }
    if (triplet.length === 2) {
      if (nums[i] > triplet[1]) {
        return true;
      } else if (nums[i] > triplet[0]) {
        triplet[1] = nums[i];
      } else {
        triplet.push(nums[i]);
      }
    }
    if (triplet.length === 3) {
      if (nums[i] > triplet[1]) {
        return true;
      } else if (nums[i] > triplet[2]) {
        triplet[0] = triplet[2];
        triplet[1] = nums[i];
      } else {
        triplet[2] = nums[i];
      }
    }
  }
  return false;
};

// greedy solution
var increasingTriplet = function (nums) {
  let first = nums[0],
    second = Infinity;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > second) {
      // [first, second, nums[i]] is the increasing triplet
      return true;
    } else if (nums[i] > first) {
      // update second
      second = nums[i];
    } else {
      // at this point, first < nums[i] < second
      // after updating first, the new first will be after second, and first < second
      // but doesn't matter since we only need to find number > second
      first = nums[i];
    }
  }
  return false;
};
