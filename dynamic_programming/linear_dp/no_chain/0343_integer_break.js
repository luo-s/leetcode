/*
Given an integer n, break it into the sum of k positive integers, 
where k >= 2, and maximize the product of those integers.

Return the maximum product you can get.
2 <= n <= 58
*/

// https://leetcode.com/problems/integer-break/description/

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
