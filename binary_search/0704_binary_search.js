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
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > target) {
      right = mid - 1;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //  4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
