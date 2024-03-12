/*
Given a string s, find the longest palindromic subsequence's length in s.

A subsequence is a sequence that can be derived from another sequence by 
deleting some or no elements without changing the order of the remaining 
elements.

1 <= s.length <= 1000
s consists only of lowercase English letters.
*/

// https://leetcode.com/problems/longest-palindromic-subsequence/description/

/*  dynamic programming
let dp[i][j] be the length of the longest palindromic subsequence in s[i:j]
if s[i] === s[j], dp[i][j] = dp[i + 1][j - 1] + 2
else dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1])
*/
// time complexity: O(n^2)
// space complexity: O(n^2)
var longestPalindromeSubseq = function (s) {
  let dp = new Array(s.length).fill().map(() => new Array(s.length).fill(0));
  for (let i = 0; i < s.length; i++) {
    dp[i][i] = 1;
  }
  // loop reversely: dp[i][j] depends on dp[i + 1][j] and dp[i][j - 1]
  for (let i = s.length - 1; i >= 0; i--) {
    // loop j from i + 1 to s.length
    for (let j = i + 1; j < s.length; j++) {
      if (s[i] === s[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
      } else {
        dp[i][j] = Math.max(dp[i + 1][j], dp[i][j - 1]);
      }
    }
  }
  return dp[0][s.length - 1];
};

// dfs with memoization
var longestPalindromeSubseq = function (s) {
  let memo = new Map();
  var dfs = function (i, j) {
    if (i > j) return 0;
    if (i === j) return 1;
    let key = i + "," + j;
    if (memo.has(key)) return memo.get(key);
    if (s[i] === s[j]) {
      memo.set(key, dfs(i + 1, j - 1) + 2);
      return memo.get(key);
    } else {
      memo.set(key, Math.max(dfs(i + 1, j), dfs(i, j - 1)));
      return memo.get(key);
    }
  };
  return dfs(0, s.length - 1);
};

/* dynamic programming with space optimization
let dp[i] be the length of the LPS in s[i : s.length - 1]

*/
// time complexity: O(n^2)
// space complexity: O(n)
var longestPalindromeSubseq = function (s) {
  let dp = new Array(s.length).fill(0);
  for (let i = s.length - 1; i >= 0; i--) {
    // base case: each character is a palindrome of length 1
    dp[i] = 1;
    let prev = 0;
    // loop j from i + 1 to s.length
    for (let j = i + 1; j < s.length; j++) {
      let temp = dp[j];
      // if match, dp[j] = prev + 2
      if (s[i] === s[j]) {
        dp[j] = prev + 2;
        // if not match, dp[j] is max(dp[j], dp[j - 1]), bubble up process
      } else {
        dp[j] = Math.max(dp[j], dp[j - 1]);
      }
      prev = temp;
    }
  }
  return dp[s.length - 1];
};
