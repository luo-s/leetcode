/*
Given an integer array nums, return the maximum possible sum of elements 
of the array such that it is divisible by three.

1 <= nums.length <= 4 * 10^4
1 <= nums[i] <= 10^4
*/

// https://leetcode.com/problems/greatest-sum-divisible-by-three/description/

/*
brute force dfs -- time limit exceeded
time complexity: O(2^n) -- each element has 2 choices, include or not include
space complexity: O(n) -- call stack
*/
var maxSumDivThree = function (nums) {
  let maxSum = 0;
  let dfs = (index, curSum) => {
    if (index >= nums.length) return;
    let sum = curSum + nums[index];
    if (sum % 3 === 0) {
      maxSum = Math.max(maxSum, sum);
    }
    dfs(index + 1, curSum);
    dfs(index + 1, curSum + nums[index]);
  };
  dfs(0, 0);
  return maxSum;
};

/*
dynamic programming
let dp[i][j] be the maximum sum of first i elements that sum % 3 = j
dp[i][j] = max(dp[i-1][j], dp[i-1][(3 + j - nums[i]) % 3] + nums[i])
*/
var maxSumDivThree = function (nums) {
  let n = nums.length;
  let dp = new Array(n + 1).fill(0).map(() => new Array(3).fill(-Infinity));
  dp[0][0] = 0;
  for (let i = 1; i <= n; i++) {
    for (let j = 0; j < 3; j++) {
      dp[i][j] = Math.max(
        dp[i - 1][j],
        dp[i - 1][(3 + j - (nums[i - 1] % 3)) % 3] + nums[i - 1]
      );
    }
  }
  return dp[n][0];
};
