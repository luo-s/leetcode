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

# find the lower bound
class Solution:
    def searchRange(self, nums: List[int], target: int) -> List[int]:
        start = self.searchInsert(nums, target)  
        # edge case: nums 中没有 target
        if start == len(nums) or nums[start] != target:
            return [-1, -1]  
        # 如果 start 存在，那么 end 必定存在
        end = self.searchInsert(nums, target + 1) - 1
        return [start, end]

    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:    # loop ends at left = right + 1
            mid = (left + right) // 2
            if nums[mid] >= target:
                right = mid - 1     # possible bound: mid = right + 1
            else:
                left = mid + 1
        return left     # 本质上是返回 right + 1
                        # special case: target > nums[-1], left = l, which is the corrected ans