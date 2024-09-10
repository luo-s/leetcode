# You are given an integer matrix isWater of size m x n that represents a map of land and water cells.

# If isWater[i][j] == 0, cell (i, j) is a land cell.
# If isWater[i][j] == 1, cell (i, j) is a water cell.
# You must assign each cell a height in a way that follows these rules:

# The height of each cell must be non-negative.
# If the cell is a water cell, its height must be 0.
# Any two adjacent cells must have an absolute height difference of at most 1. A cell is adjacent to another cell if the former is directly north, east, south, or west of the latter (i.e., their sides are touching).
# Find an assignment of heights such that the maximum height in the matrix is maximized.

# Return an integer matrix height of size m x n where height[i][j] is cell (i, j)'s height. If there are multiple solutions, return any of them.

# https://leetcode.com/problems/map-of-highest-peak/description/

import collections
class Solution:
    def highestPeak(self, isWater: List[List[int]]) -> List[List[int]]:
        m, n, queue, h = len(isWater), len(isWater[0]), collections.deque(), 0
        visited = [[False for _ in range(n)] for _ in range(m)] 
        # visited = [[False] * n for _ in range(m)]
        directions = ((0, 1), (0, -1), (1, 0), (-1, 0))
        # flip 0 and 1, initialize queue
        for i in range(m):
            for j in range(n):
                if isWater[i][j]:
                    isWater[i][j] = 0
                    queue.append((i, j))
                    visited[i][j] = True
                else: isWater[i][j] = 1
        # bfs
        while queue:
            h += 1
            l = len(queue)
            for _ in range(l):
                i, j = queue.popleft()
                for di, dj in directions:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]:
                        isWater[ni][nj] = h
                        queue.append((ni, nj))
                        visited[ni][nj] = True
        return isWater


