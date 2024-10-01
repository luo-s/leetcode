# Given an m x n grid of characters board and a string word, return true if word exists in the grid.

# The word can be constructed from letters of sequentially adjacent cells, where adjacent cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

# https://leetcode.com/problems/word-search/description/

# backtracking
class Solution:
    def exist(self, board: List[List[str]], word: str) -> bool:
        m, n, l = len(board), len(board[0]), len(word)
        
        def dfs(i, j, k):
            # base case
            if not 0 <= i < m or not 0 <= j < n or board[i][j] != word[k]: 
                return False
            if k == l - 1: 
                return True
            # recursive case
            board[i][j] = ''
            res = dfs(i + 1, j, k + 1) or dfs(i - 1, j, k + 1) or dfs(i, j + 1, k + 1) or dfs(i, j - 1, k + 1)
            board[i][j] = word[k]
            return res

        for i in range(m):
            for j in range(n):
                if dfs(i, j, 0): return True
        return False
        

