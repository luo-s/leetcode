/*
There is an integer array nums sorted in non-decreasing order (not necessarily 
with distinct values).

Before being passed to your function, nums is rotated at an unknown pivot 
index k (0 <= k < nums.length) such that the resulting array is [nums[k], 
nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and 
become [4,5,6,6,7,0,1,2,4,4].

Given the array nums after the rotation and an integer target, return true 
if target is in nums, or false if it is not in nums.

nums is guaranteed to be rotated at some pivot.

You must decrease the overall operation steps as much as possible.
*/
// https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
// related: https://leetcode.com/problems/search-in-rotated-sorted-array/description/

// brute force
// time complexity O(n)
// space complexity O(1)
var search = function (nums, target) {
  const set = new Set(nums);
  return set.has(target) ? true : false;
};

// segmental binary search
// similar problem like 0033, but nums contains duplicates
// time complexity O(logn) in average, O(n) in worst case
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = left + Math.floor((right - left) / 2);
    // found target
    if (nums[mid] === target) {
      return true;
    }
    // skip duplicates
    if (nums[mid] === nums[left]) {
      left++;
      continue;
    }
    // binary search
    if (nums[left] <= nums[mid]) {
      // left section is non-decreasing
      if (nums[left] <= target && target < nums[mid]) {
        // target is in left section
        // nums[left] <= target < nums[mid]
        right = mid - 1;
      } else {
        // target is in right section
        left = mid + 1;
      }
    } else {
      // right section is non-decreasing
      if (nums[mid] < target && target <= nums[right]) {
        // target is in right section
        // nums[mid] < target <= nums[right]
        left = mid + 1;
      } else {
        // target is in left section
        right = mid - 1;
      }
    }
  }
  return false;
};
