/*
You are climbing a staircase. It takes n steps to reach the top.
Each time you can either climb 1 or 2 steps. In how many distinct ways can 
you climb to the top?
*/
// https://leetcode.com/problems/climbing-stairs/

// dynamic programming
var climbStairs_dp = function (n) {
  const dp = new Array(n).fill(0);
  dp[0] = 1;
  dp[1] = 2;
  for (let i = 2; i < n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n - 1];
};

console.log("dynamic programming method: ", climbStairs_dp(8));

// recursion
var climbStairs_rc = function (n) {
  if (n == 1) return 1;
  if (n == 2) return 2;
  return climbStairs_rc(n - 1) + climbStairs_rc(n - 2);
};

console.log("recursion method: ", climbStairs_rc(8));
