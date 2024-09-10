# There is an m x n rectangular island that borders both the Pacific Ocean and Atlantic Ocean. The Pacific Ocean touches the island's left and top edges, and the Atlantic Ocean touches the island's right and bottom edges.

# The island is partitioned into a grid of square cells. You are given an m x n integer matrix heights where heights[r][c] represents the height above sea level of the cell at coordinate (r, c).

# The island receives a lot of rain, and the rain water can flow to neighboring cells directly north, south, east, and west if the neighboring cell's height is less than or equal to the current cell's height. Water can flow from any cell adjacent to an ocean into the ocean.

# Return a 2D list of grid coordinates result where result[i] = [ri, ci] denotes that rain water can flow from cell (ri, ci) to both the Pacific and Atlantic oceans.

# https://leetcode.com/problems/pacific-atlantic-water-flow/description/

class Solution:
    def pacificAtlantic(self, heights: list[list[int]]) -> list[list[int]]:
        if not heights or not heights[0]: return []
        m, n = len(heights), len(heights[0])
        p_visited = [[False] * n for _ in range(m)]
        a_visited = [[False] * n for _ in range(m)]
        for i in range(m):
            self.dfs(p_visited, heights, m, n, i, 0)
            self.dfs(a_visited, heights, m, n, i, n -1)
        for j in range(n):
            self.dfs(p_visited, heights, m, n, 0, j)
            self.dfs(a_visited, heights, m, n, m - 1, j)
        res = []
        for i in range(m):
            for j in range(n):
                if p_visited[i][j] and a_visited[i][j]:
                    res.append([i, j])
        return res
        
    def dfs(self, visited, heights, m, n, i, j):
        visited[i][j] = True
        directions = [(-1, 0), (1, 0), (0, 1), (0, -1)]
        for dire in directions:
            new_i, new_j = i + dire[0], j + dire[1]
            if new_i < 0 or new_i >= m or new_j < 0 or new_j >= n or visited[new_i][new_j] or heights[new_i][new_j] < heights[i][j]:
                continue
            self.dfs(visited, heights, m, n, new_i, new_j)