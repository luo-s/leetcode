# Given an integer array nums, move all 0's to the end of it while maintaining 
# the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# https://leetcode.com/problems/move-zeroes/

# stable in-place sort (bubble sort)
# time complexity O(n^2)
# space complexity O(1)
class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        l = len(nums)
        for i in range(l-1, -1, -1):
            if nums[i] == 0:
                j = i
                while j < l-1:
                    nums[j], nums[j+1] = nums[j+1], nums[j]
                    j += 1

# optimized but still with O(n^2) time complexity
class Solution:
    def moveZeroes(self, nums: list[int]) -> None:
        l = len(nums)
        left, right = 0, l - 1
        while left < right:
            if nums[left] != 0:
                left += 1
            elif nums[right] == 0:
                right -= 1
            else:
                for i in range(left, right):
                    nums[i], nums[i + 1] = nums[i + 1], nums[i]
                right -= 1
          
            