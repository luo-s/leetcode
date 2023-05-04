/*
There is an integer array nums sorted in ascending order (with distinct values).

Prior to being passed to your function, nums is possibly rotated at an unknown 
pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], 
nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become 
[4,5,6,7,0,1,2].

Given the array nums after the possible rotation and an integer target, 
return the index of target if it is in nums, or -1 if it is not in nums.

All values of nums are unique.
nums is an ascending array that is possibly rotated.

You must write an algorithm with O(log n) runtime complexity.
*/
// https://leetcode.com/problems/search-in-rotated-sorted-array/

var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    if (target > nums[0]) {
      if (nums[mid] > target) {
        right = mid - 1;
      } else if (nums[mid] < target) {
        if (nums[mid] < nums[0]) {
          right = mid - 1;
        } else {
          left = mid + 1;
        }
      } else {
        return mid;
      }
    } else if (target < nums[0]) {
      if (nums[mid] > target) {
        if (nums[mid] >= nums[0]) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      } else if (nums[mid] < target) {
        left = mid + 1;
      } else {
        return mid;
      }
    } else {
      return 0;
    }
  }
  return -1;
};

console.log(search([4, 5, 6, 7, 0, 1, 2], 0)); // 4
console.log(search([4, 5, 6, 7, 0, 1, 2], 3)); // -1
console.log(search([1], 0)); // -1
