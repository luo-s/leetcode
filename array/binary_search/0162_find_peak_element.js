/*
A peak element is an element that is strictly greater than its neighbors.

Given a 0-indexed integer array nums, find a peak element, and return its index. 
If the array contains multiple peaks, return the index to any of the peaks.

You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is 
always considered to be strictly greater than a neighbor that is outside the 
array.

nums[i] != nums[i + 1] for all valid i.

You must write an algorithm that runs in O(log n) time.
*/
// https://leetcode.com/problems/find-peak-element/

var findPeakElement = function (nums) {
  let left = 0;
  let right = nums.length - 1; // search [0, nums.length - 1]
  while (left < right) {
    // break point: left == right
    mid = (left + (right - left)) >> 1;
    if (nums[mid] > nums[mid + 1]) {
      // possible peak belongs to [left, mid]
      right = mid;
    } else if (nums[mid] < nums[mid + 1]) {
      // possible peak belongs to [mid + 1, right]
      left = mid + 1;
    }
  }
  return left; // left = mid + 1
};
