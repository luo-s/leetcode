# You are given an m x n binary matrix grid.

# A move consists of choosing any row or column and toggling each value in that row or column (i.e., changing all 0's to 1's, and all 1's to 0's).

# Every row of the matrix is interpreted as a binary number, and the score of the matrix is the sum of these numbers.

# Return the highest possible score after making any number of moves (including zero moves).

# https://leetcode.com/problems/score-after-flipping-matrix/

# try to make each row's first number 1, and then flip by column only
class Solution:
    def matrixScore(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        # make each row's first number 1
        for i in range(m):
            if grid[i][0] == 0:
                for j in range(n):
                    grid[i][j] = 1 - grid[i][j]
        # change column if nessesary 
        for j in range(n):
            cnt0 = 0
            for i in range(m):
                if grid[i][j] == 0:
                    cnt0 += 1
            if cnt0 * 2 > m:
                for i in range(m):
                    grid[i][j] = 1 - grid[i][j]
        # calculate the result
        ans = 0
        for i in range(m):
            for j in range(n):
                ans += grid[i][j] * pow(2, n - j - 1)
        return ans