/*
Given two strings text1 and text2, return the length of their LCS. 
If there is no common subsequence, return 0.

A subsequence of a string is a new string generated from the original 
string with some characters (can be none) deleted without changing the 
relative order of the remaining characters.

For example, "ace" is a subsequence of "abcde".
A common subsequence of two strings is a subsequence that is common to both strings.

1 <= text1.length, text2.length <= 1000
text1 and text2 consist of only lowercase English characters.
*/

// https://leetcode.com/problems/longest-common-subsequence/

// let dp[i][j] be the length of the longest common subsequence of
// text1[0:i) and text2[0:j)
// if text1[i] === text2[j], then dp[i][j] = dp[i - 1][j - 1] + 1
// else dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1])
var longestCommonSubsequence = function (text1, text2) {
  let l1 = text1.length,
    l2 = text2.length;
  let dp = Array(l1 + 1)
    .fill()
    .map(() => Array(l2 + 1).fill(0));
  for (let i = 1; i <= l1; i++) {
    for (let j = 1; j <= l2; j++) {
      if (text1[i - 1] === text2[j - 1]) {
        dp[i][j] = dp[i - 1][j - 1] + 1;
      } else {
        dp[i][j] = Math.max(dp[i - 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[l1][l2];
};
