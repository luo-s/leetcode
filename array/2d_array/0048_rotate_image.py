# You are given an n x n 2D matrix representing an image, 
# rotate the image by 90 degrees (clockwise).

# You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
# DO NOT allocate another 2D matrix and do the rotation.

# matrix[i][j] -> matrix_new[j][n-1-i], or
# matrix_new[i][j] = matrix[n-1-j][i]
class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        n = len(matrix)
        # deep copy
        copy = [[1 for i in range(n)] for i in range(n)]
        for i in range(n):
            for j in range(n):
                copy[i][j] = matrix[i][j]
        # rotate original matrix
        for i in range(n):
            for j in range(n):
                matrix[i][j] = copy[n-1-j][i]

# rotate in-place: matrix[i][j] -> matrix_new[j][n-1-i]
# 1) need a diagnal flip to swap i and j: matrix[i][j] -> matrix[j][i]
# 2) matrix[j][i] -> matrix[j][n-1-i]
class Solution:
    def rotate(self, matrix: list[list[int]]) -> None:
        n = len(matrix)
        # 主对角线翻转
        for i in range(n):
            for j in range(i):
                matrix[i][j], matrix[j][i] = matrix[j][i], matrix[i][j]
        # 垂直翻转
        for i in range(n):
            for j in range(n // 2):
                matrix[i][j], matrix[i][n-1-j] = matrix[i][n-1-j], matrix[i][j]


