/*
Given two strings word1 and word2, return the minimum number of operations 
required to convert word1 to word2.

You have the following three operations permitted on a word:

Insert a character
Delete a character
Replace a character

0 <= word1.length, word2.length <= 500
word1 and word2 consist of lowercase English letters.
*/

// let dp[i][j] be the minimum number of operations to convert
// word1[0..i) to word2[0..j)
// if word1[i] === word2[j], dp[i][j] = dp[i - 1][j - 1]
// else dp[i][j] = 1 + min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1])
// time complexity: O(m * n)
// space complexity: O(m * n)
var minDistance = function (word1, word2) {
  if (word1.length === 0) return word2.length;
  if (word2.length === 0) return word1.length;
  let dp = new Array(word1.length + 1)
    .fill()
    .map(() => new Array(word2.length + 1).fill(0));
  for (let i = 1; i <= word1.length; i++) {
    dp[i][0] = i;
    for (let j = 1; j <= word2.length; j++) {
      dp[0][j] = j;
      if (word1[i - 1] === word2[j - 1]) dp[i][j] = dp[i - 1][j - 1];
      else
        dp[i][j] = 1 + Math.min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]);
    }
  }
  return dp[word1.length][word2.length];
};
