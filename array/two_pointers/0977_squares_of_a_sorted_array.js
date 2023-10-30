/*
Given an integer array nums sorted in non-decreasing order, return an array of the 
squares of each number sorted in non-decreasing order.
*/

// https://leetcode.com/problems/squares-of-a-sorted-array/

// higher order function
// time complexity O(nlogn)
// space complexity O(1)
var sortedSquares = function (nums) {
  return nums.map((ele) => Math.pow(ele, 2)).sort((a, b) => a - b);
};

// two pointers
// time complexity O(n)
// space complexity O(n)
var sortedSquares = function (nums) {
  let ans = [];
  let left = 0,
    right = nums.length - 1;
  while (left <= right) {
    if (Math.abs(nums[left]) >= Math.abs(nums[right])) {
      ans.push(Math.pow(nums[left], 2));
      left++;
    } else {
      ans.push(Math.pow(nums[right], 2));
      right--;
    }
  }
  return ans.reverse();
};
