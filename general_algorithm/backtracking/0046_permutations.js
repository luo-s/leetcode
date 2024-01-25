/*
Given an array nums of distinct integers, return all the possible permutations. 
You can return the answer in any order.
*/
// All the integers of nums are unique.
// https://leetcode.com/problems/permutations/

var permute = function (nums) {
  // all possible permutations
  let result = [];
  // current permutation
  let path = [];
  // define backtracking function
  var backtracking = function (nums) {
    // if current permutation's length is equal to nums' length, push to result
    if (path.length === nums.length) {
      result.push([...path]);
      return;
    }
    // loop through nums
    for (let i = 0; i < nums.length; i++) {
      // if current permutation already includes nums[i], skip
      if (path.includes(nums[i])) continue;
      path.push(nums[i]);
      backtracking(nums);
      path.pop();
    }
  };
  backtracking(nums);
  return result;
};

console.log(permute([1, 2, 3])); // [[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
