# You are given an m x n integer matrix grid, and three integers row, col, and color. Each value in the grid represents the color of the grid square at that location.

# Two squares are called adjacent if they are next to each other in any of the 4 directions.

# Two squares belong to the same connected component if they have the same color and they are adjacent.

# The border of a connected component is all the squares in the connected component that are either adjacent to (at least) a square not in the component, or on the boundary of the grid (the first or last row or column).

# You should color the border of the connected component that contains the square grid[row][col] with color.

# Return the final grid.

# https://leetcode.com/problems/coloring-a-border/description/

class Solution:
    def colorBorder(self, grid: List[List[int]], row: int, col: int, color: int) -> List[List[int]]:
        m, n = len(grid), len(grid[0])
        visited = [[False for _ in range(n)] for _ in range(m)] 
        if grid[row][col] == color:
            return grid
        self.dfs(grid, row, col, grid[row][col], color, visited)
        for i in range(m):
            for j in range(n):
                if grid[i][j] < 0:
                    grid[i][j] = -grid[i][j]
        return grid

    def dfs(self, grid, i, j, color, new_color, visited):
        m, n = len(grid), len(grid[0])
        # base case
        if i < 0 or i >= m or j < 0 or j >= n or grid[i][j] != color or visited[i][j]:
            return
        # if border: coloring
        if (i == 0 or (visited[i - 1][j] == False and grid[i - 1][j] != color)) or (i == m - 1 or (visited[i + 1][j] == False and grid[i + 1][j] != color)) or (j == 0 or (visited[i][j - 1] == False and grid[i][j - 1] != color)) or (j == n - 1 or (visited[i][j + 1]== False and grid[i][j + 1] != color)):
            grid[i][j] = -new_color
        # if not border: mark as visited
        visited[i][j] = True
        # recursive coloring
        self.dfs(grid, i + 1, j, color, new_color, visited)
        self.dfs(grid, i - 1, j, color, new_color, visited)
        self.dfs(grid, i, j + 1, color, new_color, visited)
        self.dfs(grid, i, j - 1, color, new_color, visited)

