/*
Given an integer array nums of length n and an integer target, find three 
integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/

// brute force
// time complexity O(n^3)
// space complexity o(1)
var threeSumClosest = function (nums, target) {
  let res = 0;
  let distance = Infinity;
  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const sum = nums[i] + nums[j] + nums[k];
        if (Math.abs(sum - target) < distance) {
          distance = Math.abs(sum - target);
          res = sum;
        }
      }
    }
  }
  return res;
};

var threeSumClosest = function (nums, target) {
  const numsS = nums.sort((a, b) => a - b);
  const n = nums.length;
  let res = Infinity;
  for (let i = 0; i < n; i++) {
    if (i > 0 && nums[i] == nums[i - 1]) continue;
    let left = i + 1;
    let right = n - 1;
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right];
      if (sum == target) return target;
      if (Math.abs(sum - target) < Math.abs(res - target)) {
        res = sum;
      }
      if (sum > target) {
        right--;
      } else {
        left++;
      }
    }
  }
  return res;
};
