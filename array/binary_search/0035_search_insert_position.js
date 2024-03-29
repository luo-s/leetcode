/*
Given a sorted array of distinct integers and a target value, return the index 
if the target is found. If not, return the index where it would be if it were 
inserted in order.

nums contains distinct values sorted in ascending order.

You must write an algorithm with O(log n) runtime complexity.
*/
// find the 1st index of element >= target;
// left -> the number of elements < target;
// https://leetcode.com/problems/search-insert-position/
// same problem: https://leetcode.com/problems/find-smallest-letter-greater-than-target/description/
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    // search [0, nums.length - 1] ends when left > right
    let mid = (left + right) >> 1;
    if (nums[mid] < target) {
      // target belongs to [mid + 1, right]
      left = mid + 1;
    } else if (nums[mid] > target) {
      // target belongs to [left, mid - 1]
      right = mid - 1;
    } else {
      // target == nums[mid]
      return mid; // nums contains distinc values
    }
  }
  // not found, left if the 1st index of element >= target
  return left;
};

// another version
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    // stop condition: left === right
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      // exclude [left, mid], search in [mid + 1, right]
      left = mid + 1;
    } else {
      // exclude [mid + 1, right], search in [left, mid]
      right = mid;
    }
  }
  // final search: [left, left], take care of left === nums.length - 1
  return nums[left] >= target ? left : left + 1;
};
