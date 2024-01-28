/*
Given an array of distinct integers candidates and a target integer target, 
return a list of all unique combinations of candidates where the chosen 
numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. 
Two combinations are unique if the frequency of at least one of the chosen 
numbers is different.

The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

// https://leetcode.com/problems/combination-sum/description/

var combinationSum = function (candidates, target) {
  let result = [];
  let path = [];
  candidates.sort((a, b) => a - b);
  // define backtracking function
  var backtracking = function (candidates, target, index) {
    // push current subset to result
    if (target === 0) {
      result.push([...path]);
      return;
    }
    // if go too far, return
    if (target < 0) return;
    // loop through nums from index not 0 (eleminate duplicate subsets)
    for (let i = index; i < candidates.length; i++) {
      path.push(candidates[i]);
      // not i + 1 because we can reuse same elements
      backtracking(candidates, target - candidates[i], i);
      path.pop();
    }
  };
  backtracking(candidates, target, 0);
  return result;
};
