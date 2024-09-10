# Given an n x n binary matrix grid, return the length of the shortest clear path in the matrix. If there is no clear path, return -1.

# A clear path in a binary matrix is a path from the top-left cell (i.e., (0, 0)) to the bottom-right cell (i.e., (n - 1, n - 1)) such that:

# All the visited cells of the path are 0.
# All the adjacent cells of the path are 8-directionally connected (i.e., they are different and they share an edge or a corner).
# The length of a clear path is the number of visited cells of this path.

# https://leetcode.com/problems/shortest-path-in-binary-matrix/description/
import collections
class Solution:
    def shortestPathBinaryMatrix(self, grid: List[List[int]]) -> int:
        m, n, ans = len(grid), len(grid[0]), 0
        # edge case
        if grid[0][0] == 1 or grid[m - 1][n - 1] == 1:
            return -1
        queue = collections.deque()
        visited = [[False] * n for _ in range(m)]
        directions = [(0, 1), (0, -1), (1, 0), (-1, 0), (-1, 1), (1, 1), (1, -1), (-1, -1)]
        # initialization
        queue.append([0, 0])
        visited[0][0] = True
        # bfs
        while queue:
            ans += 1
            l = len(queue)
            for _ in range(l):
                i, j = queue.popleft()
                # base case
                if i == m - 1 and j == n - 1:
                    return ans
                # recursive case
                for di, dj in directions:
                    ni, nj = i + di, j + dj
                    if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj] and grid[ni][nj] == 0:
                        queue.append([ni, nj])
                        visited[ni][nj] = True
        return -1