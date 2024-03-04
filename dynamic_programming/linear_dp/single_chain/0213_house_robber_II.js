/*
You are a professional robber planning to rob houses along a street. 
Each house has a certain amount of money stashed. 
All houses at this place are arranged in a circle. 
That means the first house is the neighbor of the last one. 
Meanwhile, adjacent houses have a security system connected, and it will 
automatically contact the police if two adjacent houses were broken into 
on the same night.

Given an integer array nums representing the amount of money of each house, 
return the maximum amount of money you can rob tonight without alerting the police.
*/

// https://leetcode.com/problems/house-robber-ii/description/

/*
circular: cannot rob both the first and the last house.
1. rob the first house, then we cannot rob the last house. nums(0, n-1)
2. rob the last house, then we cannot rob the first house. rob(1)
3. return the maximum of the two cases.
note: those two cases both includes don't rob the first and the last house.
*/
var rob = function (nums) {
  if (nums.length === 1) return nums[0];
  var robHelper = function (nums) {
    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);
    for (let i = 2; i < nums.length; i++) {
      dp[i] = Math.max(dp[i - 1], dp[i - 2] + nums[i]);
    }
    return dp[nums.length - 1];
  };
  return Math.max(
    robHelper(nums.slice(0, nums.length - 1)),
    robHelper(nums.slice(1))
  );
};
