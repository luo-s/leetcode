# Given an integer n, return the number of structurally unique BST's (binary search trees) which has exactly n nodes of unique values from 1 to n.

# https://leetcode.com/problems/unique-binary-search-trees/

class Solution:
    def numTrees(self, n: int) -> int:
        if n == 1: return 1
        dp = [0 for _ in range(n + 1)]
        dp[0], dp[1], dp[2] = 1, 1, 2
        for i in range(3, n + 1):
            for j in range(1, i + 1):
                dp[i] += dp[i - j] * dp[j - 1]
        return dp[n]
