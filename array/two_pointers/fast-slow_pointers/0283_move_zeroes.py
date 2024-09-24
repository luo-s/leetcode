# Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

# Note that you must do this in-place without making a copy of the array.

# https://leetcode.com/problems/move-zeroes/

# bubble sort - TLE
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        for i in range(len(nums)):
            for j in range(len(nums) - 1 - i):
                if nums[j] == 0 and nums[j + 1] != 0:
                    nums[j], nums[j + 1] = nums[j + 1], nums[j]

# two pointers
class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        slow = fast = 0
        while fast < len(nums):
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1
            fast += 1

class Solution:
    def moveZeroes(self, nums: List[int]) -> None:
        slow = 0  
        for fast in range(len(nums)):
            if nums[fast] != 0:
                nums[slow], nums[fast] = nums[fast], nums[slow]
                slow += 1