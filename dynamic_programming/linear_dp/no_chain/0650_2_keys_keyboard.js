/*
There is only one character 'A' on the screen of a notepad. You can perform 
one of two operations on this notepad for each step:

1. Copy All: You can copy all the characters present on the screen.
2. Paste: You can paste the characters which are copied last time.

Given an integer n, return the minimum number of operations to get the 
character 'A' exactly n times on the screen.

1 <= n <= 1000
*/

// https://leetcode.com/problems/2-keys-keyboard/description/

// if n === 1, return 0
// for any n > 2, the first and second steps must be copy and paste
// the least efficient way is to copy and paste n-1 times: minSteps(n) <= n
// (*2) -> c+p; (*3) -> c+p+p; (*4 = *2 *2) -> c+p+c+p; (*5) -> c+p+p+p+p...
// if n is a prime, the only way to get n is to copy and paste n-1 times
// let dp[i] be the minSteos(i)
// for n = k1 * k2 * ... * ki, dp(n) = dp(k1) + dp(k2) + ... + dp(ki)
var minSteps = function (n) {
  let dp = new Array(n + 1).fill(0);
  // corner case
  dp[1] = 0;
  dp[2] = 2;
  dp[3] = 3;
  // fill the dp array
  for (let i = 2; i <= n; i++) {
    // initialize dp[i] to i (the maximum steps to get i)
    dp[i] = i;
    for (let k = 2; k * k <= i; k++) {
      // if i is not a prime, dp[i] = dp[k] + dp[i/k]
      if (i % k === 0) {
        dp[i] = dp[k] + dp[i / k];
        break;
      }
    }
  }
  return dp[n];
};

// memoization
var minSteps = function (n) {
  let memo = new Map();
  var dp = function (n) {
    // base cases
    if (n === 1) return 0;
    if (n === 2) return 2;
    if (n === 3) return 3;
    if (memo.has(n)) return memo.get(n);
    // recursive cases
    for (let i = 2; i * i <= n; i++) {
      if (n % i === 0) {
        memo.set(n, dp(i) + dp(n / i));
        return memo.get(n);
      }
    }
    memo.set(n, n);
    return memo.get(n);
  };
  return dp(n);
};
