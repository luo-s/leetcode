# You are given an m x n binary matrix grid, where 0 represents a sea cell and 1 represents a land cell.

# A move consists of walking from one land cell to another adjacent (4-directionally) land cell or walking off the boundary of the grid.

# Return the number of land cells in grid for which we cannot walk off the boundary of the grid in any number of moves.
    
# https://leetcode.com/problems/number-of-enclaves/description/

class Solution:
    def numEnclaves(self, grid: List[List[int]]) -> int:
        m, n, ans = len(grid), len(grid[0]), 0
        # exe dfs function
        for i in range(m):
            self.dfs(grid, i, 0)
            self.dfs(grid, i, n - 1)
        for j in range(n):
            self.dfs(grid, 0, j)
            self.dfs(grid, m - 1, j)
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    ans += 1
        return ans

    def dfs(self, grid, i, j):
        m, n = len(grid), len(grid[0])
        # base case:
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] != 1:
            return
        # recursive case:
        grid[i][j] = 0
        self.dfs(grid, i + 1, j)
        self.dfs(grid, i - 1, j)
        self.dfs(grid, i, j + 1)
        self.dfs(grid, i, j - 1)


    