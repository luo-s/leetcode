# There is an m x n grid with a ball. The ball is initially at the position [startRow, startColumn]. You are allowed to move the ball to one of the four adjacent cells in the grid (possibly out of the grid crossing the grid boundary). You can apply at most maxMove moves to the ball.

# Given the five integers m, n, maxMove, startRow, startColumn, return the number of paths to move the ball out of the grid boundary. Since the answer can be very large, return it modulo 10 ** 9 + 7.

# https://leetcode.com/problems/out-of-boundary-paths/description/

# dfs -- TLE
class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        def dfs(startRow, startColumn, maxMove):
            # base case
            if maxMove < 0:
                return 0
            if startRow < 0 or startRow >= m or startColumn < 0 or startColumn >= n:
                return 1
            return dfs(startRow - 1, startColumn, maxMove - 1) + dfs(startRow + 1, startColumn, maxMove - 1) + dfs(startRow, startColumn - 1, maxMove - 1) + dfs(startRow, startColumn + 1, maxMove - 1)
        
        return dfs(startRow, startColumn, maxMove) % (10 ** 9 + 7)
    
# dfs with memoization
class Solution:
    def findPaths(self, m: int, n: int, maxMove: int, startRow: int, startColumn: int) -> int:
        table = dict()
        def dfs(startRow, startColumn, maxMove):
            # first check memoization table
            if (startRow, startColumn, maxMove) in table:
                return table[(startRow, startColumn, maxMove)]
            # base case
            if maxMove < 0:
                return 0
            if startRow < 0 or startRow >= m or startColumn < 0 or startColumn >= n:
                return 1
            # recursive case
            ans = dfs(startRow - 1, startColumn, maxMove - 1) + dfs(startRow + 1, startColumn, maxMove - 1) + dfs(startRow, startColumn - 1, maxMove - 1) + dfs(startRow, startColumn + 1, maxMove - 1)
            table[(startRow, startColumn, maxMove)] = ans
            return ans
        
        return dfs(startRow, startColumn, maxMove) % (10 ** 9 + 7)
