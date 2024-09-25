# Given an integer array nums, return the number of triplets chosen from the array that can make triangles if we take them as side lengths of a triangle.

# https://leetcode.com/problems/valid-triangle-number/

class Solution:
    def triangleNumber(self, nums: List[int]) -> int:
        nums.sort()
        l = len(nums)
        cnt = 0
        for c in range(2, l):
            a, b = 0, c - 1
            while a < b:
              if nums[a] + nums[b] > nums[c]:
                  cnt += b - a
                  b -= 1
              else: 
                  a += 1
        return cnt