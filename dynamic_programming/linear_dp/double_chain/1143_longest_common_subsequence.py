# Given two strings text1 and text2, return the length of their LCS. 
# If there is no common subsequence, return 0.

# A subsequence of a string is a new string generated from the original 
# string with some characters (can be none) deleted without changing the 
# relative order of the remaining characters.

# For example, "ace" is a subsequence of "abcde".
# A common subsequence of two strings is a subsequence that is common to both strings.

# 1 <= text1.length, text2.length <= 1000
# text1 and text2 consist of only lowercase English characters.

# https://leetcode.com/problems/longest-common-subsequence/

# let dp[i][j] denote the LCS of first i elements of text1 and the first j elements of text2
# dp[i][j] = dp[i - 1][j - 1] + 1 if text1[i - 1] == text2[j - 1]
# dp[i][j]= max(dp[i − 1][j], dp[i][j − 1] if text1[i - 1] != text2[j - 1]
# ans = dp[l1][l2]
class Solution:
    def longestCommonSubsequence(self, text1: str, text2: str) -> int:
        l1, l2 = len(text1), len(text2)
        dp = [[0 for _ in range(l2 + 1)] for _ in range(l1 + 1)]
        for i in range(1, l1 + 1):
            for j in range(1, l2 + 1):
                if text1[i - 1] == text2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
                else:
                    dp[i][j] = max(dp[i - 1][j], dp[i][j - 1])

        return dp[l1][l2]