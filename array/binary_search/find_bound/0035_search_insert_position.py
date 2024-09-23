# Given a sorted array of distinct integers and a target value, return the index 
# if the target is found. If not, return the index where it would be if it were 
# inserted in order.

# nums contains distinct values sorted in ascending order.

# You must write an algorithm with O(log n) runtime complexity.

# https://leetcode.com/problems/search-insert-position/
# similar
# LC 34 https://leetcode.com/problems/find-first-and-last-position-of-element-in-sorted-array/

# bisect.bisec_left()
# find the smallest index where nums[idx] >= target
class Solution:
    def searchInsert(self, nums: List[int], target: int) -> int:
        left, right = 0, len(nums) - 1
        ans = len(nums)     # handle the case target > nums[-1]
        while left <= right:
            mid = (left + right) // 2
            if nums[mid] > target:
                right = mid - 1
                ans = mid
            elif nums[mid] < target:
                left = mid + 1
            else:
                return mid  # only because array contains distinct integers
        return ans

# optimized binary search: more general purpose 
class Solution:
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