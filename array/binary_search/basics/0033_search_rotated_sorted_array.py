# There is an integer array nums sorted in ascending order (with distinct values).

# Prior to being passed to your function, nums is possibly rotated at an unknown 
# pivot index k (1 <= k < nums.length) such that the resulting array is [nums[k], 
# nums[k+1], ..., nums[n-1], nums[0], nums[1], ..., nums[k-1]] (0-indexed). 
# For example, [0,1,2,4,5,6,7] might be rotated at pivot index 3 and become 
# [4,5,6,7,0,1,2].

# Given the array nums after the possible rotation and an integer target, 
# return the index of target if it is in nums, or -1 if it is not in nums.

# All values of nums are unique.
# nums is an ascending array that is possibly rotated.

# You must write an algorithm with O(log n) runtime complexity.

# https://leetcode.com/problems/search-in-rotated-sorted-array/
# advanced 
# LC 81  https://leetcode.com/problems/search-in-rotated-sorted-array-ii/
# related 
# LC 153 https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
# LC 154 https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/

class Solution:
    def search(self, nums: List[int], target: int) -> int:
        if not nums:
            return -1
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] == target:
                return mid
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
        return -1
                