# Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

# An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

# https://leetcode.com/problems/number-of-islands/description/

# DFS 一般通过递归实现
class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.dfs(grid, i, j)
                    count += 1
        return count

    def dfs(self, grid, i, j):
        n, m = len(grid), len(grid[0])
        if i < 0 or i >= n or j < 0 or j >= m or grid[i][j] == '0': return 
        grid[i][j] = '0'
        self.dfs(grid, i + 1, j)
        self.dfs(grid, i, j + 1)
        self.dfs(grid, i - 1, j)
        self.dfs(grid, i, j - 1)

# BFS 一般通过队列实现
class Solution:
    def numIslands(self, grid: list[list[str]]) -> int:
        count = 0
        for i in range(len(grid)):
            for j in range(len(grid[0])):
                if grid[i][j] == '1':
                    self.bfs(grid, i, j)
                    count += 1
        return count
    
    def bfs(self, grid, i, j):
        n, m = len(grid), len(grid[0])
        queue = [[i, j]]
        while queue:
            [i, j] = queue.pop(0)
            if i < 0 or i >= n or j < 0 or j >= m or grid[i][j] == '0':
                continue
            grid[i][j] = '0'
            queue += [[i + 1, j], [i - 1, j], [i, j - 1], [i, j + 1]]