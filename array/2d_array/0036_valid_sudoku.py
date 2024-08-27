# Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be 
# validated according to the following rules:

# Each row must contain the digits 1-9 without repetition.
# Each column must contain the digits 1-9 without repetition.
# Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 
# without repetition.
# Note:

# A Sudoku board (partially filled) could be valid but is not necessarily solvable.
# Only the filled cells need to be validated according to the mentioned rules.

# board.length == 9
# board[i].length == 9
# board[i][j] is a digit 1-9 or '.'.

# https://leetcode.com/problems/valid-sudoku/description/

class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        n = len(board)
        # row validation
        for i in range(n):
            digits = set()
            for j in range(n):
                if board[i][j] == ".":
                    continue
                elif  board[i][j] in digits:
                    return False
                else:
                    digits.add(board[i][j])
        # column validation
        for j in range(n):
            digits = set()
            for i in range(n):
                if board[i][j] == ".":
                    continue
                elif board[i][j] in digits:
                    return False
                else:
                    digits.add(board[i][j])
        # sub-box validation
        for i in range(0, n, 3):
            for j in range(0, n, 3):
                digits = set()
                for r in range(i, i + 3):
                    for c in range(j, j + 3):
                        if board[r][c] == ".":
                            continue
                        elif board[r][c] in digits:
                            return False
                        else:
                            digits.add(board[r][c])
        return True

# validation in single loop-over
class Solution:
    def isValidSudoku(self, board: list[list[str]]) -> bool:
        row_set = [set() for i in range(9)]
        col_set = [set() for i in range(9)]
        square_set = [set() for i in range(9)]
        for i in range(9):
            for j in range(9):
                item = board[i][j]
                if item != '.':
                    if item in row_set[i]:
                        return False
                    else:
                        row_set[i].add(item)
                    if item in col_set[j]:
                        return False
                    else:
                        col_set[j].add(item)
                    square_idx = 3 * (i // 3) + j // 3
                    if item in square_set[square_idx]:
                        return False
                    else:
                        square_set[square_idx].add(item)
        return True