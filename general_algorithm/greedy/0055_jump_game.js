/*
You are given an integer array nums. 
You are initially positioned at the array's first index, and each element 
in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

// https://leetcode.com/problems/jump-game/description/

/*
dynamic programming  -- time limit exceeded
let dp[i] be true if we can reach the i-th index
dp[i] = dp[i] || dp[j] && nums[j] >= i - j for all j < i
*/
// time complexity: O(n^2)
// space complexity: O(n)
var canJump = function (nums) {
  let dp = new Array(nums.length).fill(false);
  dp[0] = true;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      dp[i] = dp[i] || (dp[j] && nums[j] >= i - j);
    }
  }
  return dp[nums.length - 1];
};
