/*
Given an integer array nums and an integer val, remove all occurrences of val 
in nums in-place. The order of the elements may be changed. Then return the 
number of elements in nums which are not equal to val.

Consider the number of elements in nums which are not equal to val be k, to get 
accepted, you need to do the following things:

Change the array nums such that the first k elements of nums contain the elements 
which are not equal to val. The remaining elements of nums are not important as 
well as the size of nums.

Return k.
*/

// https://leetcode.com/problems/remove-element/

// two pointers - overwrite
// time complexity O(n)
// space complexity O(1)
var removeElement = function (nums, val) {
  const n = nums.length;
  let left = 0;
  for (let right = 0; right < n; right++) {
    if (nums[right] !== val) {
      nums[left] = nums[right];
      left++;
    }
  }
  return left;
};

// two pointers
// time complexity O(n)
// space complexity O(1)
var removeElement = function (nums, val) {
  let left = 0,
    right = nums.length;
  while (left < right) {
    if (nums[left] === val) {
      nums[left] = nums[right - 1];
      right--;
    } else {
      left++;
    }
  }
  return left;
};
