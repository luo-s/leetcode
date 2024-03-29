/*
Suppose an array of length n sorted in ascending order is rotated between 
1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum 
element of this array.

All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.

You must write an algorithm that runs in O(log n) time.
*/
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// binary search
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  // search [0, nums.length - 1], ends when left === right
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      // mid is in the right part
      right = mid;
    } else if (nums[mid] > nums[right]) {
      // mid is in the left part
      left = mid + 1;
    }
  }
  return nums[left];
};
