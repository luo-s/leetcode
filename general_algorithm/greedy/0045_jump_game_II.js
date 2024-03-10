/*
You are given a 0-indexed array of integers nums of length n. 
You are initially positioned at nums[0].

nums[i] represents the maximum length of a forward jump from index i. 
In other words, if you are at nums[i], you can jump to any nums[i + j] where:
0 <= j <= nums[i] and i + j < n

Return the minimum number of jumps to reach nums[n - 1]. 
The test cases are generated such that you can reach nums[n - 1].
*/

// https://leetcode.com/problems/jump-game-ii/description/

/* dynamic programming
let dp[i] be the minimum number of jumps to reach nums[i]
dp[i] = Math.min(dp[i], dp[j] + 1) for all j < i and j + nums[j] >= i;
if nums[i] cannot be reached, dp[i] = Infinity
*/
// time complexity: O(n^2)
// space complexity: O(n)
var jump = function (nums) {
  let dp = new Array(nums.length).fill(Infinity);
  // initializaiton: need 0 jumps to reach nums[0]
  dp[0] = 0;
  for (let i = 1; i < nums.length; i++) {
    for (let j = 0; j < i; j++) {
      if (j + nums[j] >= i) {
        dp[i] = Math.min(dp[i], dp[j] + 1);
      }
    }
  }
  return dp[nums.length - 1];
};
