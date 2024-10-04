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
if nums[i] cannot be reached, dp[i] = Infinity, don't need to update
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

/* greedy
everytime jump to the position that can reach the farthest the next jump 
*/
// time complexity: O(n)
// space complexity: O(1)
var jump = function (nums) {
  let jumps = 0,
    end = 0,
    farthest = 0;
  // i < nums.length - 1, avoid jump when i landed on the end
  for (let i = 0; i < nums.length - 1; i++) {
    // update the farthest position that can be reached
    farthest = Math.max(farthest, i + nums[i]);
    // if i reaches the end, update jumps, farthest is the new end
    if (i === end) {
      jumps++;
      end = farthest;
    }
  }
  return jumps;
};
