/*
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

nums is a non-decreasing array.

You must write an algorithm with O(log n) runtime complexity.
*/
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

// brute force traverse
// time complexity O(n)
// space complexity O(1)
var searchRange = function (nums, target) {
  let first = -1,
    last = -1;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target && nums[i - 1] !== target) first = i;
    if (nums[i] === target && nums[i + 1] !== target) last = i;
  }
  return [first, last];
};

// binary search
// time complexity O(logn)
// space complexity O(1)
var searchRange = function (nums, target) {
  let first = findFirst(nums, target);
  let last = findLast(nums, target);
  return [first, last];
};

var findFirst = function (nums, target) {
  let first = -1;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    // end when left === right
    let mid = Math.floor((left + right) / 2); // rounding down
    if (nums[mid] < target) {
      left = mid + 1; // move left pointer, pairing with rounding down
    } else {
      right = mid;
    }
  }
  if (nums[left] === target) first = left;
  return first;
};

var findLast = function (nums, target) {
  let last = -1;
  let left = 0,
    right = nums.length - 1;
  while (left < right) {
    // end when left === right
    let mid = Math.floor((left + right + 1) / 2); // rounding up
    if (nums[mid] > target) {
      right = mid - 1; // move right pointer, pairing with rounding up
    } else {
      left = mid;
    }
  }
  if (nums[right] === target) last = right;
  return last;
};

