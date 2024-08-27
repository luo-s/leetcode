# Given an m x n matrix mat, return an array of all the elements of the array in a 
# diagonal order.

# m == mat.length
# n == mat[i].length
# 1 <= m, n <= 10 ** 4
# 1 <= m * n <= 10 ** 4
# -10 ** 5 <= mat[i][j] <= 10 **5

# https://leetcode.com/problems/diagonal-traverse/

class Solution:
    def findDiagonalOrder(self, mat: list[list[int]]) -> list[int]:
        m, n = len(mat), len(mat[0])
        up_right = True
        ans = []
        i, j = 0, 0
        while len(ans) < m * n:
                # i and j may out of boundary
                if i < m and j < n:
                    ans.append(mat[i][j])
                # top border
                if i == 0 and up_right:
                    j += 1
                    up_right = False
                # right border
                elif j == n - 1 and up_right:
                    i += 1
                    up_right = False
                # left border
                elif j == 0 and not up_right:
                    i += 1
                    up_right = True
                # bottome border
                elif i == m - 1 and not up_right:
                    j += 1
                    up_right = True
                # up right direction
                elif up_right:
                    i -= 1
                    j += 1
                # left bottome direction
                elif not up_right:
                    i += 1
                    j -= 1
        return ans