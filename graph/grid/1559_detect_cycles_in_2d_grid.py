# Given a 2D array of characters grid of size m x n, you need to find if there exists any cycle consisting of the same value in grid.

# A cycle is a path of length 4 or more in the grid that starts and ends at the same cell. From a given cell, you can move to one of the cells adjacent to it - in one of the four directions (up, down, left, or right), if it has the same value of the current cell.

# Also, you cannot move to the cell that you visited in your last move. For example, the cycle (1, 1) -> (1, 2) -> (1, 1) is invalid because from (1, 2) we visited (1, 1) which was the last visited cell.

# Return true if any cycle of the same value exists in grid, otherwise, return false.

# https://leetcode.com/problems/detect-cycles-in-2d-grid/description/

class Solution:
    def containsCycle(self, grid: List[List[str]]) -> bool:
        m, n = len(grid), len(grid[0])
        visited = [[False for _ in range(n)] for _ in range(m)] 
        for i in range(m):
            for j in range(n):
                if not visited[i][j] and self.dfs(grid, i, j, -1, -1, visited):
                    return True
        return False
    
    # we need two pointers pi and pj to track parent cell
    def dfs(self, grid, i, j, pi, pj, visited):
        m, n = len(grid), len(grid[0])
        # update visited
        visited[i][j] = True
        
        # Direction vectors for up, down, left, right
        directions = [(-1, 0), (1, 0), (0, -1), (0, 1)]
        # loop through all directions
        for di, dj in directions:
            ni, nj = i + di, j + dj
            # only consider the neighbor has the same value 
            if 0 <= ni < m and 0 <= nj < n and grid[ni][nj] == grid[i][j]:
                # if has not visited, recursive case
                if not visited[ni][nj] and self.dfs(grid, ni, nj, i, j, visited):
                    return True
                # If it's visited but not the parent, base case
                elif ni != pi or nj != pj:  
                    return True
        # other base case
        return False
