/*
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

All the integers in nums are unique.
nums is sorted in ascending order.

You must write an algorithm with O(log n) runtime complexity.
*/

// https://leetcode.com/problems/binary-search/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  // search [left, right]
  while (left <= right) {
    // stop condition: left > right
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      // search [left, mid - 1]
      right = mid - 1;
    } else if (nums[mid] < target) {
      // search [mid + 1, right]
      left = mid + 1;
    } else {
      // found it
      return mid;
    }
  }
  return -1;
};

/* another version
mid = Math.floor((left + right) / 2);
nums[mid] < target: left = mid + 1;
else: right = mid;
*/
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  // search [left, right]
  while (left < right) {
    // stop condition: left === right
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      // exclude [left, mid], search [mid + 1, rihgt]
      left = mid + 1;
    } else if (nums[mid] >= target) {
      // exclude [mid + 1, right], search [left, mid]
      right = mid;
    }
  }
  // final search: [left, left]
  return nums[left] === target ? left : -1;
};

/* another version
mid = Math.floor((left + right + 1) / 2);
nums[mid] > target: right = mid - 1;
else: left = mid;
*/
var search = function (nums, target) {
  let left = 0,
    right = nums.length - 1;
  // search [left, right]
  while (left < right) {
    // stop condition: left === right
    let mid = Math.floor((left + right + 1) / 2);
    if (nums[mid] > target) {
      // exclude [mid, right], search [left, mid - 1]
      right = mid - 1;
    } else if (nums[mid] <= target) {
      // exclude [left, mid - 1], search [mid, right]
      left = mid;
    }
  }
  // final search: [left, left]
  return nums[left] === target ? left : -1;
};
