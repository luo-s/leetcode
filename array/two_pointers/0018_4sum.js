/*
Given an array nums of n integers, return an array of all the unique 
quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

0 <= a, b, c, d < n
a, b, c, and d are distinct.
nums[a] + nums[b] + nums[c] + nums[d] == target
You may return the answer in any order.
*/
// https://leetcode.com/problems/4sum/

// brute force
// Time complexity: O(n^4)
// Space complexity: O(n)
var fourSum = function (nums, target) {
  let res = [];
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (i > 0 && nums[i] === nums[i - 1]) continue;
    for (let j = i + 1; j < nums.length; j++) {
      if (j > i + 1 && nums[j] === nums[j - 1]) continue;
      for (let k = j + 1; k < nums.length; k++) {
        if (k > j + 1 && nums[k] === nums[k - 1]) continue;
        for (let l = k + 1; l < nums.length; l++) {
          if (l > k + 1 && nums[l] === nums[l - 1]) continue;
          if (nums[i] + nums[j] + nums[k] + nums[l] === target) {
            res.push([nums[i], nums[j], nums[k], nums[l]]);
          }
        }
      }
    }
  }
  return res;
};
