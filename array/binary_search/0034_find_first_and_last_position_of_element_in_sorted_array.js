/*
Given an array of integers nums sorted in non-decreasing order, 
find the starting and ending position of a given target value.

If target is not found in the array, return [-1, -1].

You must write an algorithm with O(log n) runtime complexity.
*/
// https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

var searchRange = function (nums, target) {
  let result = [];

  let leftFirst = 0;
  let rightFirst = nums.length - 1;
  let isFoundFirst = 0;
  while (leftFirst < rightFirst) {
    let mid = Math.floor((rightFirst + leftFirst) / 2);
    if (nums[mid] > target) {
      rightFirst = mid;
    } else if (nums[mid] < target) {
      leftFirst = mid + 1;
    } else {
      rightFirst = mid;
      isFoundFirst = 1;
    }
  }
  if (isFoundFirst) {
    result.push(leftFirst);
  } else {
    result.push(-1);
  }

  let leftLast = 0;
  let rightLast = nums.length - 1;
  let isFoundSecond = 0;
  while (leftLast < rightLast) {
    let mid = Math.floor((rightLast + leftLast) / 2);
    if (nums[mid] > target) {
      rightLast = mid;
    } else if (nums[mid] < target) {
      leftLast = mid + 1;
    } else {
      leftLast = mid + 1;
      isFoundSecond = 1;
    }
  }
  if (isFoundSecond) {
    result.push(leftLast - 1);
  } else {
    result.push(-1);
  }

  return result;
};

console.log(searchRange([5, 7, 7, 8, 8, 10], 8)); // [3, 4];
console.log(searchRange([5, 7, 7, 8, 8, 10], 6)); // [-1, -1];
console.log(searchRange([], 0)); // [-1, -1];
