/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed, the only constraint 
stopping you from robbing each of them is that adjacent houses have 
security systems connected and it will automatically contact the police 
if two adjacent houses were broken into on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.

1 <= nums.length <= 100
0 <= nums[i] <= 400
*/

// https://leetcode.com/problems/house-robber/description/

/*
let dp[i] be the maximum robbed money from the first i - 1 houses
dp[i] = max(dp[i-1], dp[i-2] + nums[i])
*/
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  let dp = new Array(nums.length).fill(0);
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
  }
  return dp[nums.length - 1];
};

// dp with optimized space
var rob = function (nums) {
  let prev = 0,
    curr = 0;
  for (let i = 0; i < nums.length; i++) {
    let next = Math.max(curr, prev + nums[i]);
    prev = curr;
    curr = next;
  }
  return curr;
};
