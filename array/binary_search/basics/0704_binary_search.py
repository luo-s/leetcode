
# Given an array of integers nums which is sorted in ascending order, 
# and an integer target, write a function to search target in nums. 
# If target exists, then return its index. Otherwise, return -1.

# All the integers in nums are unique.
# nums is sorted in ascending order.

# You must write an algorithm with O(log n) runtime complexity.


# https://leetcode.com/problems/binary-search/

# 直接法: divide search space into 3 parts: 
# [left, mid - 1], [mid], [mid + 1, right]
class Solution: 
    def search(self, nums: list[int], target: int) -> int:
        # search space: [left, right]
        left, right = 0, len(nums) - 1  
        # exit condition: [right + 1, right], no final check needed
        while left <= right: 
            # round up or down, both works
            # no final check needed, thus no out of index error
            mid = left + (right - left) // 2
            # mid = left + (right - left + 1) // 2
            
            # divide search space into 3 parts: 
            # [left, mid - 1], [mid], [mid + 1, right]
            if nums[mid] < target:
                # nums[mid] < target, search space: [mid + 1, right]
                left = mid + 1
            elif nums[mid] > target:
                # nums[mid] > target, search space: [left, mid - 1]
                right = mid - 1
            else:
                # found the target
                return mid
        
        # not found, return -1
        return -1 

# 排除法: divide search space into 2 parts
# [left, mid], [mid + 1, right] if mid = left + (right - left) // 2
# [left, mid - 1], [mid, right] if mid = left + (right - left + 1) // 2
class Solution: 
    def search(self, nums: list[int], target: int) -> int:
        # search space: [left, right]
        left, right = 0, len(nums) - 1
        # exit condition: [right, right], final check needed
        while left < right:
            # round down mid, only move left over mid
            mid = left + (right - left) // 2
            if nums[mid] < target:
                left = mid + 1
            else:
                right = mid
            # roun up mid, only move right over mid
            # mid = left + (right - left + 1) // 2
            # if nums[mid] > target:
            #     right = mid - 1
            # else:
            #     left = mid
        # final check
        return left if nums[left] == target else -1
