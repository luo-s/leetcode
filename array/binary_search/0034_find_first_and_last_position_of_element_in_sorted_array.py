# Given an array of integers nums sorted in non-decreasing order, 
# find the starting and ending position of a given target value.

# If target is not found in the array, return [-1, -1].

# nums is a non-decreasing array.

# You must write an algorithm with O(log n) runtime complexity.

# https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        return [self.findFirst(nums, target), self.findLast(nums, target)]

    def findFirst(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        ans = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                right = mid - 1
                ans = mid
        return ans

    def findLast(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        ans = -1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] < target:
                left = mid + 1
            elif nums[mid] > target:
                right = mid - 1
            else:
                left = mid + 1
                ans = mid
        return ans