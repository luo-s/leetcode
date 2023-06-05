/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.
*/
// All the integers of nums are unique.
// https://leetcode.com/problems/permutations/

var permute = function (nums) {
  let result = [];
  if (nums.length <= 1) {
    result.push(nums);
  } else if (nums.length === 2) {
    result.push([nums[0], nums[1]], [nums[1], nums[0]]);
  } else {
    for (let i = 0; i < nums.length; i++) {}
  }
  return result;
};

console.log(permute([1, 2]));
