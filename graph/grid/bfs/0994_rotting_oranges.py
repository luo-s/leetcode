# You are given anm x n grid where each cell can have one of three values:

# 0 representing an empty cell,
# 1 representing a fresh orange, or
# 2 representing a rotten orange.
# Every minute, any fresh orange that is 4-directionally adjacent to a rotten orange becomes rotten.

# Return the minimum number of minutes that must elapse until no cell has a fresh orange. If this is impossible, return -1.

# https://leetcode.com/problems/rotting-oranges/description/

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n = len(grid), len(grid[0])
        fresh_cnt = minute = 0
        queue = []
        # initialization queue 
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 1:
                    fresh_cnt += 1
                elif grid[i][j] == 2:
                    queue.append((i, j))
        # bfs
        while fresh_cnt > 0 and len(queue) > 0:
            minute += 1 
            l = len(queue)
            for i in range(l):
                i, j = queue.pop(0)
                if i - 1 >= 0 and grid[i - 1][j] == 1:
                    grid[i - 1][j] = 2
                    fresh_cnt -= 1
                    queue.append((i - 1, j))
                if i + 1 < m and grid[i + 1][j] == 1:
                    grid[i + 1][j] = 2
                    fresh_cnt -= 1
                    queue.append((i + 1, j))
                if j - 1 >= 0 and grid[i][j - 1] == 1:
                    grid[i][j - 1] = 2
                    fresh_cnt -= 1
                    queue.append((i, j - 1))
                if j + 1 < n and grid[i][j + 1] == 1:
                    grid[i][j + 1] = 2
                    fresh_cnt -= 1
                    queue.append((i, j + 1))
        
        return -1 if fresh_cnt > 0 else minute

class Solution:
    def orangesRotting(self, grid: List[List[int]]) -> int:
        m, n, time = len(grid), len(grid[0]), 0
        directions = [(1, 0), (-1, 0), (0, 1), (0, -1)]
        queue = []
        # add the rotten orange to the queue
        for i in range(m):
            for j in range(n):
                if grid[i][j] == 2:
                    queue.append((i, j, time))
        # bfs
        while queue:
            i, j, time = queue.pop(0)
            for di, dj in directions:
                if 0 <= i + di < m and 0 <= j + dj < n and grid[i + di][j + dj] == 1:
                    grid[i + di][j + dj] = 2
                    queue.append((i + di, j + dj, time + 1))
        # if there are still fresh oranges, return -1
        for m in grid:
            if 1 in m: return -1

        return time

