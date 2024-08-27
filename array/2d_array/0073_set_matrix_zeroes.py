# Given an m x n integer matrix matrix, if an element is 0, 
# set its entire row and column to 0's.

# You must do it in place.

# m == matrix.length
# n == matrix[0].length
# 1 <= m, n <= 200
# -2^31 <= matrix[i][j] <= 2^31 - 1

# https://leetcode.com/problems/set-matrix-zeroes/

class Solution:
    def setZeroes(self, matrix: list[list[int]]) -> None:
        m, n = len(matrix), len(matrix[0])
        row_zero, col_zero = [False] * m, [False] * n
        for i in range(m):
            for j in range(n):
                if matrix[i][j] == 0:
                    row_zero[i] = col_zero[j] = True
        for i in range(m):
            for j in range(n):
                if row_zero[i] or col_zero[j]:
                    matrix[i][j] = 0
