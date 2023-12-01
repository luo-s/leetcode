/*
Given an array nums with n objects colored red, white, or blue, sort them 
in-place so that objects of the same color are adjacent, with the colors 
in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and 
blue, respectively.

You must solve this problem without using the library's sort function.
*/
// https://leetcode.com/problems/sort-colors/

// built-in function
// time complexity O(nlogn)
// space complexity O(1)
var sortColors = function (nums) {
  return nums.sort((a, b) => a - b);
};

// bubble sort
// time complexity O(n^2)
// space complexity O(1)
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        [nums[j], nums[j + 1]] = [nums[j + 1], nums[j]];
      }
    }
  }
  return nums;
};
