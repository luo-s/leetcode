/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the 
Fibonacci sequence, such that each number is the sum of the two preceding ones, 
starting from 0 and 1.
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/
// https://leetcode.com/problems/fibonacci-number/description/

// dp
var fib = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};
