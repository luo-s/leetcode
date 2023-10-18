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

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4];
console.log(searchRange([5, 7, 7, 8, 8, 10], 7)); // [1, 2];
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1];
console.log(searchRange([], 0)); // [-1, -1];
