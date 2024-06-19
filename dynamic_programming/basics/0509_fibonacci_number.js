/*
The Fibonacci numbers, commonly denoted F(n) form a sequence, called the 
Fibonacci sequence, such that each number is the sum of the two preceding ones, 
starting from 0 and 1.
F(0) = 0, F(1) = 1
F(n) = F(n - 1) + F(n - 2), for n > 1.
Given n, calculate F(n).
*/
// https://leetcode.com/problems/fibonacci-number/description/

// recursion
// really slow: a lot of repeated calculations, huge call stack
// time complexity: O(2^n)
// space complexity: O(1)
var fib_rc = function (n) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  return fib_rc(n - 1) + fib_rc(n - 2);
};

// tabulation: bottom-up dynamic programming: use an array to store the fibonacci number
// time complexity: O(n)
// space complexity: O(n)
var fib_dp = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
};

// memoization: top-down dynamic programming: use a map to store the fibonacci number
// time complexity: O(n)
// space complexity: O(n)
var fib_memo = function (n) {
  const memo = new Map();
  return helper(n, memo);
};

var helper = function (n, memo) {
  if (n == 0) return 0;
  if (n == 1) return 1;
  if (memo.has(n)) return memo.get(n);
  memo.set(n, helper(n - 1, memo) + helper(n - 2, memo));
  return memo.get(n);
};

console.time("recursive method timer");
let ans_2 = fib_rc(42);
console.log(`recursion method: ${ans_2}`);
console.timeEnd("recursive method timer");

console.time("tabulation method timer");
let ans_1 = fib_dp(42);
console.log(`tabulation method: ${ans_1}`);
console.timeEnd("tabulation method timer");

console.time("memoization method timer");
let ans_3 = fib_memo(42);
console.log(`memoization method: ${ans_3}`);
console.timeEnd("memoization method timer");
