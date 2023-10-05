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
var fib_dp = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

let start_1 = Date.now();
let ans_1 = fib_dp(42);
let finish_1 = Date.now();
console.log(
  `dynamic programming method: ${ans_1}, Total time taken: ${
    finish_1 - start_1
  }`
);

var fib_rc = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib_rc(n - 1) + fib_rc(n - 2);
};

let start_2 = Date.now();
let ans_2 = fib_rc(42);
let finish_2 = Date.now();
console.log(
  `dynamic programming method: ${ans_2}, Total time taken: ${
    finish_2 - start_2
  }`
);
