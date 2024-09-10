# Given an n x n grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized, and return the distance. If no land or water exists in the grid, return -1.

# The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

# https://leetcode.com/problems/as-far-from-land-as-possible/description/
import collections
class Solution:
    def maxDistance(self, grid: List[List[int]]) -> int:
        n, ans = len(grid), -1
        queue = collections.deque()
        visited = [[False] * n for _ in range(n)]
        directions = [(0, 1), (1, 0), (0, -1), (-1, 0)]
        # initialization
        for i in range(n):
            for j in range(n):
                if grid[i][j] == 1:
                    queue.append([i, j])
        if not queue or len(queue) == n ** 2:
            return -1
        # bfs
        while queue:
            ans += 1
            l = len(queue)
            for _ in range(l):
                i, j = queue.popleft()
                for di, dj in directions:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < n and 0 <= nj < n and grid[ni][nj] == 0 and not visited[ni][nj]:
                        queue.append([ni, nj])
                        visited[ni][nj] = True
        return ans

