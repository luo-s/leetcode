/*
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

nums is a non-decreasing array.

You must write an algorithm with O(log n) runtime complexity.
*/
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4];
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1];
console.log(searchRange([], 0)); // [-1, -1];
