/*
Given an integer n, return an array ans of length n + 1 such that for each i 
(0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/

// https://leetcode.com/problems/counting-bits/description/

// brute force
// time complexity: O(n * log(n))
// space complexity: O(n)
var countBits = function (n) {
  var numberOfBits = function (num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  };
  let ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = numberOfBits(i);
  }
  return ans;
};

/* dynamic programming
let dp[i] be the number of 1's in the binary representation of i
1) if i is odd, dp[i] = dp[i-1] + 1
2) if i is even, dp[i] = dp[i/2] (least significant bit is 0, thus right 
shift by one doesn't change the number of 1's)
*/
// time complexity: O(n)
// space complexity: O(n)
var countBits = function (n) {
  let dp = new Array(n + 1).fill(0);
  for (let i = 1; i < n + 1; i++) {
    if (i % 2 === 1) dp[i] = dp[i - 1] + 1;
    else dp[i] = dp[i >> 1];
  }
  return dp;
};
