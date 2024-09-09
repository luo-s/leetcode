/*
Given an array of integers nums and an integer target, return indices of the 
two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may 
not use the same element twice.

Only one valid answer exists.
You can return the answer in any order.
*/

// https://leetcode.com/problems/two-sum/

// hash table
// time complexity O(n)
// space complexity O(n)
var twoSum = function (nums, target) {
  let checked = {};
  for (let i = 0; i < nums.length; i++) {
    let number = target - nums[i];
    if (checked[number] !== undefined) {
      return [i, checked[number]];
    } else {
      checked[nums[i]] = i;
    }
  }
};
