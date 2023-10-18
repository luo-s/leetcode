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
  let right = nums.length - 1; //[left, right]
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1; //[mid + 1, right]
    } else {
      right = mid - 1; //[left, mid - 1]
    }
  }
  return left; //left == right + 1
};

var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length; //[left, right)
  while (left < right) {
    let mid = (left + right) >> 1;
    if (nums[mid] < target) {
      left = mid + 1; //[mid + 1, right)
    } else {
      right = mid; //[left, mid)
    }
  }
  return left; //left == right, can also return right
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
