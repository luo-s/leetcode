# Given an m x n binary matrix filled with 0's and 1's, find the largest square containing only 1's and return its area.

# https://leetcode.com/problems/maximal-square/

# dp(i,j) 表示以 (i,j) 为右下角，且只包含 1 的正方形的边长最大值。
# 因此 dp(i,j) = min(dp(i − 1, j), dp(i − 1, j − 1), dp(i, j − 1)) + 1

class Solution:
    def maximalSquare(self, matrix: List[List[str]]) -> int:
        m, n = len(matrix), len(matrix[0])
        max_size = 0
        dp = [[0 for _ in range(n + 1)] for _ in range(m + 1)]
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == '1':
                    if i == 0 or j == 0:
                        dp[i][j] = 1
                    else:
                        dp[i][j] = min(dp[i - 1][j - 1], dp[i - 1][j], dp[i][j - 1]) + 1
                    max_size = max(max_size, dp[i][j])
        return max_size * max_size
