# You are given an m x n matrix board containing letters 'X' and 'O', capture regions that are surrounded:

# Connect: A cell is connected to adjacent cells horizontally or vertically.
# Region: To form a region connect every 'O' cell.
# Surround: The region is surrounded with 'X' cells if you can connect the region with 'X' cells and none of the region cells are on the edge of the board.
# A surrounded region is captured by replacing all 'O's with 'X's in the input matrix board.

# https://leetcode.com/problems/surrounded-regions/description/


class Solution:
    def solve(self, board: List[List[str]]) -> None:
        """
        Do not return anything, modify board in-place instead.
        """
        m, n = len(board), len(board[0])
        # Mark 'O's on the border and their connected 'O's
        for i in range(m):
            self.dfs(board, i, 0)
            self.dfs(board, i, n-1)
        for j in range(n):
            self.dfs(board, 0, j)
            self.dfs(board, m-1, j)
        # Flip 'O's to 'X's and restore '#'s to 'O's
        for i in range(m):
            for j in range(n):
                if board[i][j] == 'O':
                    board[i][j] = 'X'
                elif board[i][j] == '#':
                    board[i][j] = 'O'

    def dfs(self, board, i, j):
        m, n = len(board), len(board[0])
        if i < 0 or i >= m or j < 0 or j >= n or board[i][j] != 'O':
            return
        board[i][j] = '#'
        self.dfs(board, i+1, j)
        self.dfs(board, i-1, j)
        self.dfs(board, i, j+1)
        self.dfs(board, i, j-1)