/*
You are given an integer array nums. 
You are initially positioned at the array's first index, and each element 
in the array represents your maximum jump length at that position.

Return true if you can reach the last index, or false otherwise.
*/

// https://leetcode.com/problems/jump-game/description/

/* dynamic programming -- time limit exceeded
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
      if (dp[i]) break;
    }
  }
  return dp[nums.length - 1];
};

/* brute force
the only situation that cannot reach the end is that there is a 0s cannot skip
if (nums[i] === 0), for all j < i, nums[j] <= i - j, return false
*/
// time complexity: O(n^2)
// space complexity: O(1)
var canJump = function (nums) {
  if (nums.length === 1) return true;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === 0) {
      let canSkip = false;
      for (let j = 0; j < i; j++) {
        if (nums[j] > i - j) {
          canSkip = true;
          break;
        }
      }
      if (!canSkip) return false;
    }
  }
  return true;
};

/* optimized dynamic programming
let dp[i] be the max index that can be reached from 0 to i
if i can be reached: dp[i] = Math.max(dp[i - 1], i + nums[i])
if i cannot be reached: dp[i] = dp[i - 1]
*/
// time complexity: O(n)
// space complexity: O(n)
var canJump = function (nums) {
  let dp = new Array(nums.length).fill(0);
  // initialize: the max from 0 is nums[0]
  dp[0] = nums[0];
  for (let i = 1; i < nums.length; i++) {
    // if the current index cannot be reached from the previous index
    if (i > dp[i - 1]) dp[i] = dp[i - 1];
    // fi the current index can be reached
    else dp[i] = Math.max(dp[i - 1], i + nums[i]);
  }
  return dp[nums.length - 1] >= nums.length - 1;
};

/* greedy
if we can reach i from j, we can reach all indexed in  [j, i]
let max be the max index that can be reached, max = 0;
loop through the array, update max = Math.max(max, i + nums[i])

*/
// time complexity: O(n)
// space complexity: O(1)
var canJump = function (nums) {
  let max = 0;
  for (let i = 0; i < nums.length; i++) {
    if (max >= i) max = Math.max(max, i + nums[i]);
    // else: max < i, cannot reach i, max remains the same
  }
  return max >= nums.length - 1;
};
