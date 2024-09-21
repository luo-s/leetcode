# Suppose an array of length n sorted in ascending order is rotated between 
# 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

# [4,5,6,7,0,1,2] if it was rotated 4 times.
# [0,1,2,4,5,6,7] if it was rotated 7 times.

# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
# in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

# Given the sorted rotated array nums of unique elements, return the minimum 
# element of this array.

# All the integers of nums are unique.
# nums is sorted and rotated between 1 and n times.

# You must write an algorithm that runs in O(log n) time.

# https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        if nums[right] > nums[left]:    # edge case: ASC ordered 
            return nums[0]     
        ans = right   # edge case: DESC ordered
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] >= nums[0]:
                left = mid + 1
            elif nums[mid] < nums[0]:
                right = mid - 1
                ans = mid
        return nums[ans] 

# optimized binary search
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] >= nums[0]:
                left = mid + 1
            elif nums[mid] < nums[0]:
                right = mid - 1
        return nums[right + 1] if right < len(nums) - 1 else nums[0]

# how to avoid avoid edge cases separately: compare nums[mid] and nums[right]
# last iterations: right = left + 1, we have two nunbers, nums[left], nums[right], and nums[left] > nums[right]. Due to the design of this problem, left will always move to right/mid + 1, and that will be the minimum.
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1    
        while left < right:     # ends at left = right
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            elif nums[mid] <= nums[right]:
                right = mid
        return nums[left]