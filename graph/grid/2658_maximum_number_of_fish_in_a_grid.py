# You are given a 0-indexed 2D matrix grid of size m x n, where (r, c) represents:

# A land cell if grid[r][c] = 0, or
# A water cell containing grid[r][c] fish, if grid[r][c] > 0.
# A fisher can start at any water cell (r, c) and can do the following operations any number of times:

# Catch all the fish at cell (r, c), or
# Move to any adjacent water cell.
# Return the maximum number of fish the fisher can catch if he chooses his starting cell optimally, or 0 if no water cell exists.

# An adjacent cell of the cell (r, c), is one of the cells (r, c + 1), (r, c - 1), (r + 1, c) or (r - 1, c) if it exists.

# https://leetcode.com/problems/maximum-number-of-fish-in-a-grid/description/

class Solution:
    def findMaxFish(self, grid: List[List[int]]) -> int:
        row, col = len(grid), len(grid[0])
        max_fish = 0
        for i in range(row):
            for j in range(col):
                if grid[i][j] > 0:
                    max_fish = max(max_fish, self.dfs(grid, i, j))
        return max_fish

    def dfs(self, grid, i, j):
        if i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0]) or grid[i][j] == 0:
            return 0 
        if grid[i][j] < 0:
            return 0
        if grid[i][j] > 0:
            temp = grid[i][j]
            grid[i][j] = -1
            return temp + self.dfs(grid, i + 1, j) + self.dfs(grid, i - 1, j) + self.dfs(grid, i, j + 1) + self.dfs(grid, i, j - 1)
        
