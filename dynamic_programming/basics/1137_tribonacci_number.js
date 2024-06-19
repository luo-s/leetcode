/*
The Tribonacci sequence Tn is defined as follows: 
T0 = 0, T1 = 1, T2 = 1, and Tn+3 = Tn + Tn+1 + Tn+2 for n >= 0.
Given n, return the value of Tn.

*/
//https://leetcode.com/problems/n-th-tribonacci-number/description/

// bottom-up dp: use an array to store the tribonacci number
var tribonacci_dp = function (n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  dp[2] = 1;
  for (let i = 3; i < n + 1; i++) {
    dp[i] = dp[i - 1] + dp[i - 2] + dp[i - 3];
  }
  return dp[n + 1];
};

// memoization: top-down dp: use a map to store the tribonacci number
// extra call stack consumption
var tribonacci_memo = function (n) {
  let memo = new Map();
  var helper = function (n) {
    if (n === 0) return 0;
    if (n === 1 || n === 2) return 1;
    if (memo.has(n)) return memo.get(n);
    let result = helper(n - 1) + helper(n - 2) + helper(n - 3);
    memo.set(n, result);
    return result;
  };
  return helper(n);
};

console.time("dynamic programming method timer");
tribonacci_dp(42);
console.timeEnd("dynamic programming method timer");

console.time("dynamic programming method timer");
tribonacci_memo(42);
console.timeEnd("dynamic programming method timer");
