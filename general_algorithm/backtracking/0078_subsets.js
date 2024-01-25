/*
Given an integer array nums of unique elements, return all possible 
subsets (the power set).

The solution set must not contain duplicate subsets. 
Return the solution in any order.
*/

var subsets = function (nums) {
  // all possible subsets
  let result = [];
  // current subset
  let path = [];
  // define backtracking function
  var backtracking = function (nums, index) {
    // push current subset to result
    result.push([...path]);
    // if index is out of bound, return
    if (index >= nums.length) return;
    // loop through nums from index not 0(eleminate duplicate subsets)
    for (let i = index; i < nums.length; i++) {
      path.push(nums[i]);
      backtracking(nums, i + 1);
      path.pop();
    }
  };
  backtracking(nums, 0);
  return result;
};
