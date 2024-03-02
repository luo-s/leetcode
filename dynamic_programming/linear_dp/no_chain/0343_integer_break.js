/*
Given an integer n, break it into the sum of k positive integers, 
where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.
2 <= n <= 58
*/

// https://leetcode.com/problems/integer-break/description/

// dynamic programming
// let dp[i] be the maximum product of breaking i
// for every j that, 0 < j < i, we can break i into j and i - j
// we further break j into two parts, if and only if dp[j] > j
// we further break i - j into two parts, if and only if dp[i - j] > i - j
var integerBreak = function (n) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 2; i <= n; i++) {
    // the minimum product of breaking i is 1 * (i - 1)
    dp[i] = 1 * (i - 1);
    let mid = Math.floor(i / 2);
    for (let j = 1; j <= mid; j++) {
      dp[i] = Math.max(dp[i], Math.max(j, dp[j]) * Math.max(i - j, dp[i - j]));
    }
  }
  return dp[n];
};

/* math
1)
if we break n into k parts, the maximum product is (n / k) ^ k
when k is e, the maximum product is (n / e) ^ e
e = 2.71828, thus we can break n into 2 or 3
since 3 * 3 > 2 * 2 * 2, thus we should break n into 3 as much as possible

2)
for n = n1  + n2 + ... + nk, we need to maximize p = n1 * n2 * ... * nk
f(2) = 1, f(3) = 2, f(4) = 4, f(5) = 6, f(6) = 9...
if x >= 4, f(x) >= x
for any ni > 4, we can get larget product by breaking it smaller pieces
thus, we can break n into 2 or 3 (breaking into 1 doesn't make sense)
since 3 * 3 > 2 * 2 * 2, thus we should break n into 3 as much as possible
*/
var integerBreak = function (n) {
  if (n === 2) return 1;
  if (n === 3) return 2;
  let product = 1;
  while (n > 4) {
    product *= 3;
    n -= 3;
  }
  return product * n;
};
