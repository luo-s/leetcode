/*
Given an integer array nums of length n and an integer target, find three 
integers in nums such that the sum is closest to target.

Return the sum of the three integers.

You may assume that each input would have exactly one solution.
*/

// https://leetcode.com/problems/3sum-closest/

// brute force
// time complexity: O(n^3)
// space complexity: O(1)
var threeSumClosest = function (nums, target) {
  let closest = Infinity;
  let diff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        let sum = nums[i] + nums[j] + nums[k];
        let newDiff = Math.abs(target - sum);
        if (newDiff < diff) {
          diff = newDiff;
          closest = sum;
        }
      }
    }
  }
  return closest;
};

// two pointers
// time complexity: O(n^2)
// space complexity: O(1)
var threeSumClosest = function (nums, target) {
  // sort the array
  nums.sort((a, b) => a - b);
  let closest = Infinity;
  let diff = Infinity;
  for (let i = 0; i < nums.length; i++) {
    // define two pointers
    let left = i + 1;
    let right = nums.length - 1;
    // end condition: left === right
    while (left < right) {
      let sum = nums[i] + nums[left] + nums[right];
      let newDiff = Math.abs(target - sum);
      if (newDiff < diff) {
        diff = newDiff;
        closest = sum;
      }
      // move the pointers
      if (sum < target) {
        left++;
      } else {
        right--;
      }
    }
  }
  return closest;
};
