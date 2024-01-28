/*
Given an integer array nums that may contain duplicates, return all 
possible subsets (the power set).

The solution set must not contain duplicate subsets. 
Return the solution in any order.
*/

// https://leetcode.com/problems/subsets-ii/description/

var subsetsWithDup = function (nums) {
  let result = [];
  let path = [];
  nums.sort((a, b) => a - b);
  let used = new Array(nums.length).fill(false);
  var backtracking = function (nums, index) {
    result.push([...path]);
    if (index >= nums.length) return;
    for (let i = index; i < nums.length; i++) {
      if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
      path.push(nums[i]);
      used[i] = true;
      backtracking(nums, i + 1);
      path.pop();
      used[i] = false;
    }
  };
  backtracking(nums, 0);
  return result;
};
