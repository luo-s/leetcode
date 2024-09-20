# Write an efficient algorithm that searches for a value target in an m x n integer matrix matrix. This matrix has the following properties:

# Integers in each row are sorted in ascending from left to right.
# Integers in each column are sorted in ascending from top to bottom.

# https://leetcode.com/problems/search-a-2d-matrix-ii/

class Solution:
    def searchMatrix(self, matrix: List[List[int]], target: int) -> bool:
        m, n = len(matrix), len(matrix[0])
        # base case
        if target < matrix[0][0] or target > matrix[m - 1][n - 1]: 
            return False
        left, right = 0, min(m, n) - 1
        # find smallest idx that matrix[idx][idx] > target
        idx = right + 1
        while left <= right:
            mid = (left + right) // 2
            if matrix[mid][mid] > target:
                right = mid - 1
                idx = mid
            elif matrix[mid][mid] < target:
                left = mid + 1
            else:
                return True # base case
        # recursive case
        if idx < min(m, n):
            return self.searchMatrix(matrix[idx:], target) or self.searchMatrix([row[idx:] for row in matrix[:idx]], target)
        if idx == min(m, n):
            if m > n:  
                return self.searchMatrix(matrix[idx:], target)
            else:
                return self.searchMatrix([row[idx:] for row in matrix], target)