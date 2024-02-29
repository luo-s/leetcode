/*
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols 
'+' and '-' before each integer in nums and then concatenate all the 
integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 
1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, 
which evaluates to target.

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000
*/

// https://leetcode.com/problems/target-sum/description/

// dfs
// time complexity: O(2^n)
// space complexity: O(n)
var findTargetSumWays = function (nums, target) {
  var dfs = function (i, curSum) {
    if (i === nums.length) {
      return curSum === target ? 1 : 0;
    }
    return dfs(i + 1, curSum + nums[i]) + dfs(i + 1, curSum - nums[i]);
  };
  return dfs(0, 0);
};

// dfs with memoization (top-down dp)
// time complexity: O(2^n)
// space complexity: O(n)
var findTargetSumWays = function (nums, target) {
  let memo = new Map();
  var dfs = function (i, curSum) {
    if (i === nums.length) {
      return curSum === target ? 1 : 0;
    }
    let key = `${i} & ${curSum}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    let result = dfs(i + 1, curSum + nums[i]) + dfs(i + 1, curSum - nums[i]);
    memo.set(key, result);
    return result;
  };
  return dfs(0, 0);
};
