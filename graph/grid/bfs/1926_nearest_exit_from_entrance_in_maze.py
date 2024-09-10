# You are given an m x n matrix maze (0-indexed) with empty cells (represented as '.') and walls (represented as '+'). You are also given the entrance of the maze, where entrance = [entrancerow, entrancecol] denotes the row and column of the cell you are initially standing at.

# In one step, you can move one cell up, down, left, or right. You cannot step into a cell with a wall, and you cannot step outside the maze. Your goal is to find the nearest exit from the entrance. An exit is defined as an empty cell that is at the border of the maze. The entrance does not count as an exit.

# Return the number of steps in the shortest path from the entrance to the nearest exit, or -1 if no such path exists.

# https://leetcode.com/problems/nearest-exit-from-entrance-in-maze/description/
import collections
class Solution:
    def nearestExit(self, maze: List[List[str]], entrance: List[int]) -> int:
        m, n, queue, ans = len(maze), len(maze[0]), collections.deque(), -1
        visited = [[False] * n for _ in range(m)]
        directions = ((0, 1), (0, -1), (1, 0), (-1, 0))
        # initialization
        queue.append(entrance)
        visited[entrance[0]][entrance[1]] = True
        # bfs
        while queue:
            ans += 1
            l = len(queue)
            for _ in range(l):
              i, j = queue.popleft()
              # base case
              if (i == 0 or i == m - 1 or j == 0 or j == n - 1) and maze[i][j] == '.' and [i, j] != entrance:
                  return ans
              # recursive case
              for di, dj in directions:
                  ni, nj = i + di, j + dj
                  if 0 <= ni < m and 0 <= nj < n and maze[ni][nj] == '.' and not visited[ni][nj]:
                      queue.append([ni, nj])
                      visited[ni][nj] = True
        return -1
                    

