# You are given an m x n binary matrix grid. An island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

# The area of an island is the number of cells with a value 1 in the island.

# Return the maximum area of an island in grid. If there is no island, return 0.

# https://leetcode.com/problems/max-area-of-island/description/

# DFS
class Solution:
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        max_area = 0
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    max_area = max(max_area, self.dfs(grid, i, j))
        return max_area

    def dfs(self, grid, i, j):
        m, n = len(grid), len(grid[0])
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
            return 0
        grid[i][j] = 0
        return self.dfs(grid, i + 1, j) + self.dfs(grid, i - 1, j) + self.dfs(grid, i, j + 1) + self.dfs(grid, i, j - 1) + 1

# BFS
class Solution:
    def maxAreaOfIsland(self, grid: list[list[int]]) -> int:
        max_area = 0
        m, n = len(grid), len(grid[0])
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    max_area = max(max_area, self.bfs(grid, i, j))
        return max_area

    def bfs(self, grid, i, j):
        m, n = len(grid), len(grid[0])
        queue, area = [[i, j]], 0
        while queue:
            [i, j] = queue.pop(0)
            if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] == 0:
                continue
            area += 1
            grid[i][j] = 0
            queue += [[i + 1, j], [i - 1, j], [i, j - 1], [i, j + 1]]
        return area