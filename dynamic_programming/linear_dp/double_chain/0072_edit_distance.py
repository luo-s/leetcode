# Given two strings word1 and word2, return the minimum number of operations 
# required to convert word1 to word2.

# You have the following three operations permitted on a word:

# Insert a character
# Delete a character
# Replace a character

# 0 <= word1.length, word2.length <= 500
# word1 and word2 consist of lowercase English letters.

# https://leetcode.com/problems/edit-distance/

# let dp[i][j] denote the minimum number of opertations to convert word1[:i] to word2[:j]
# if word1[i] == word[j]: dp[i][j] = dp[i - 1][j - 1]
# if word1[i] != word[j]: dp[i][j] = 1 + min(dp[i - 1][j], dp[i][j - 1], dp[i - 1][j - 1]) 
#                                            insert        delete        replace
class Solution:
    def minDistance(self, word1: str, word2: str) -> int:
        l1, l2 = len(word1), len(word2)
        dp = [[0 for _ in range(l2 + 1)] for _ in range(l1 + 1)]
        # initialization
        for i in range(l1 + 1):
            dp[i][0] = i    # word1[:i] -> '' need delete i times
        for j in range(l2 + 1):
            dp[0][j] = j    # '' -> word2[:j] need insert j times

        for i in range(1, l1 + 1):
            for j in range(1, l2 + 1):
                if word1[i - 1] == word2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1]
                else:
                    dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
        return dp[l1][l2]
        