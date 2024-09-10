# You are given row x col grid representing a map where grid[i][j] = 1 represents land and grid[i][j] = 0 represents water.

# Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

# The island doesn't have "lakes", meaning the water inside isn't connected to the water around the island. One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

# https://leetcode.com/problems/island-perimeter/description/

# brute force: loop through all cells, calculate each cell's contribution to perimeter
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        row, col, ans = len(grid), len(grid[0]), 0
        for i in range(row):
            for j in range(col):
                ans += self.contribute(grid, row, col, i, j)
                print(ans)
        return ans
  
    def contribute(self, grid, m, n, i, j):
        if grid[i][j] == 0:
            return 0
        ans = 0
        if i == 0 or grid[i - 1][j] == 0: ans += 1
        if i == m - 1 or grid[i + 1][j] == 0: ans += 1
        if j == 0 or grid[i][j - 1] == 0: ans += 1
        if j == n - 1 or grid[i][j + 1] == 0: ans += 1
        return ans
    
# DFS
# lop through only land cells, calculate each cell's contribution recursively
class Solution:
    def islandPerimeter(self, grid: List[List[int]]) -> int:
        row, col, ans = len(grid), len(grid[0]), 0
        for i in range(row):
            for j in range(col):
                if grid[i][j] == 1:
                    ans += self.dfs(grid, i, j)
        return ans
        
    def dfs(self, grid, i, j):
        # reach the border, perimeter + 1
        if (i < 0 or i >= len(grid) or j < 0 or j >= len(grid[0])):
            return 1
        # reach the water, perimeter + 1
        if grid[i][j] == 0:
            return 1
        # reach visited land, no change
        if grid[i][j] == 2:
            return 0
        # mark as visited
        grid[i][j] = 2
        # calculate perimeter recursively
        return self.dfs(grid, i - 1, j) + self.dfs(grid, i + 1, j) + self.dfs(grid, i, j + 1) + self.dfs(grid, i, j - 1)
    