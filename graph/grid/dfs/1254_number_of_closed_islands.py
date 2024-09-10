# Given a 2D grid consists of 0s (land) and 1s (water).  An island is a maximal 4-directionally connected group of 0s and a closed island is an island totally (all left, top, right, bottom) surrounded by 1s.

# Return the number of closed islands.

# https://leetcode.com/problems/number-of-closed-islands/description/

class Solution:
    def closedIsland(self, grid: List[List[int]]) -> int:
        m, n, ans = len(grid), len(grid[0]), 0
        for i in range(m):
            self.toggle_border_0(grid, i, 0)
            self.toggle_border_0(grid, i, n - 1)
        for j in range(n):
            self.toggle_border_0(grid, 0, j)
            self.toggle_border_0(grid, m - 1, j)
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 0:
                    self.dfs(grid, i, j)
                    ans += 1
        return ans
        
    def toggle_border_0(self, grid, i, j):
        m, n = len(grid), len(grid[0])
        # base case:
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] != 0:
            return 
        grid[i][j] = 1
        # recursive case:
        self.toggle_border_0(grid, i + 1, j)
        self.toggle_border_0(grid, i - 1, j)
        self.toggle_border_0(grid, i, j + 1)
        self.toggle_border_0(grid, i, j - 1)

    def dfs(self, grid, i, j):
        m, n = len(grid), len(grid[0])
        # base case:
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j]:
            return
        grid[i][j] = 1
        self.dfs(grid, i + 1, j)
        self.dfs(grid, i - 1, j)
        self.dfs(grid, i, j + 1)
        self.dfs(grid, i, j - 1)
        

        

