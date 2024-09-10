# You are given an m x n grid. Each cell of grid represents a street. The street of grid[i][j] can be:

# 1 which means a street connecting the left cell and the right cell.
# 2 which means a street connecting the upper cell and the lower cell.
# 3 which means a street connecting the left cell and the lower cell.
# 4 which means a street connecting the right cell and the lower cell.
# 5 which means a street connecting the left cell and the upper cell.
# 6 which means a street connecting the right cell and the upper cell.

# You will initially start at the street of the upper-left cell (0, 0). A valid path in the grid is a path that starts from the upper left cell (0, 0) and ends at the bottom-right cell (m - 1, n - 1). The path should only follow the streets.

# Notice that you are not allowed to change any street.

# Return true if there is a valid path in the grid or false otherwise.

# https://leetcode.com/problems/check-if-there-is-a-valid-path-in-a-grid/description/

class Solution:
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        visited = [[False for _ in range(n)] for _ in range(m)]
        directions = {
            1: [(0, -1), (0, 1)],   # left, right
            2: [(-1, 0), (1, 0)],   # up, down
            3: [(0, -1), (1, 0)],   # left, down
            4: [(0, 1), (1, 0)],    # right, down
            5: [(0, -1), (-1, 0)],  # left, up
            6: [(0, 1), (-1, 0)]    # right, up
        }
        return self.dfs(grid, 0, 0, visited, directions)

    def dfs(self, grid, i, j, visited, directions):
        m, n = len(grid), len(grid[0])
        # base case: if we reach the bottom-right corner
        if i == m - 1 and j == n - 1:
            return True
        # mark the current cell as visited
        visited[i][j] = True
        for di, dj in directions[grid[i][j]]:
            ni, nj = i + di, j + dj
            if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]:
                # Check if the adjacent cell is compatible with the current direction
                if (di, dj) == (0, -1) and grid[ni][nj] in [1, 4, 6]:  # coming from right
                    if self.dfs(grid, ni, nj, visited, directions):
                        return True
                if (di, dj) == (0, 1) and grid[ni][nj] in [1, 3, 5]:   # coming from left
                    if self.dfs(grid, ni, nj, visited, directions):
                        return True
                if (di, dj) == (-1, 0) and grid[ni][nj] in [2, 3, 4]:  # coming from down
                    if self.dfs(grid, ni, nj, visited, directions):
                        return True
                if (di, dj) == (1, 0) and grid[ni][nj] in [2, 5, 6]:   # coming from up
                    if self.dfs(grid, ni, nj, visited, directions):
                        return True
        return False

class Solution:
    def hasValidPath(self, grid: List[List[int]]) -> bool:
        m, n = len(grid), len(grid[0])
        visited = [[False] * n for _ in range(m)]
        dirs = (((0, -1), (0, 1)), ((-1, 0), (1, 0)), ((0, -1), (1, 0)),  
                ((0, 1), (1, 0)), ((0, -1), (-1, 0)), ((0, 1), (-1, 0)))
        def dfs(i, j):
            if i == m - 1 and j == n - 1: return True
            visited[i][j] = True
            for di, dj in dirs[grid[i][j]-1]:
                ni, nj = i + di, j + dj
                if 0 <= ni < m and 0 <= nj < n and not visited[ni][nj]: 
                    # Check if the adjacent cell is compatible with the current direction: can come back
                    if (-di, -dj) in dirs[grid[ni][nj]-1] and dfs(ni, nj):
                        return True
            return False
        return dfs(0, 0)