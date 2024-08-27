# Given an array nums with n objects colored red, white, or blue, sort them 
# in-place so that objects of the same color are adjacent, with the colors 
# in the order red, white, and blue.

# We will use the integers 0, 1, and 2 to represent the color red, white, and 
# blue, respectively.

# You must solve this problem without using the library's sort function.

# https://leetcode.com/problems/sort-colors/

class Solution:
    def sortColors(self, nums: list[int]) -> None:
        # sort 0
        left, right = 0, len(nums) - 1
        while left < right:
            if nums[left] == 0:
                left += 1
            elif nums[right] != 0:
                right -= 1
            else:
                nums[left], nums[right] = nums[right], nums[left]
        # sort 2
        left, right = 0, len(nums) - 1
        while left < right:
            if nums[left] != 2:
                left += 1
            elif nums[right] == 2:
                right -= 1
            else:
                nums[left], nums[right] = nums[right], nums[left]
    
# sort in a single loop through
class Solution:
    def sortColors(self, nums: list[int]) -> None:
        i, left, right = 0, 0, len(nums) - 1        
        while i <= right:
            if nums[i] == 0:
               nums[left], nums[i] = nums[i], nums[left]
               left += 1
            elif nums[i] == 2:
                nums[right], nums[i] = nums[i], nums[right]
                right -= 1
                i -= 1
            i += 1