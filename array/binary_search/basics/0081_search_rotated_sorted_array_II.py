# There is an integer array nums sorted in non-decreasing order (not necessarily 
# with distinct values).

# Before being passed to your function, nums is rotated at an unknown pivot 
# index k (0 <= k < nums.length) such that the resulting array is [nums[k], 
# nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
# For example, [0,1,2,4,4,4,5,6,6,7] might be rotated at pivot index 5 and 
# become [4,5,6,6,7,0,1,2,4,4].

# Given the array nums after the rotation and an integer target, return true 
# if target is in nums, or false if it is not in nums.

# nums is guaranteed to be rotated at some pivot.

# You must decrease the overall operation steps as much as possible.

# https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

# convert to LC 33 problem: remove duplicates
class Solution:
    def search(self, nums: List[int], target: int) -> bool:
        right = len(nums) - 1
        while right >= 0 and nums[right] == nums[0]:
            right -= 1
        if right == -1: return nums[0] == target
        return self.distinct_search(nums[:right + 1], target)

    def distinct_search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return True
            if nums[0] <= nums[mid]:
                if nums[0] <= target < nums[mid]:
                    right = mid - 1
                else:
                    left = mid + 1
            else:
                if nums[mid] < target <= nums[- 1]:
                    left = mid + 1
                else:
                    right = mid - 1
        return False