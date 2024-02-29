/*
The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.

*/
//https://leetcode.com/problems/n-th-tribonacci-number/description/

//dp
var tribonacci = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n + 1];
};

console.time("dynamic programming method timer");
tribonacci(42);
console.timeEnd("dynamic programming method timer");
