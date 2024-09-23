# Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

# [4,5,6,7,0,1,4] if it was rotated 4 times.
# [0,1,4,4,5,6,7] if it was rotated 7 times.
# Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

# Given the sorted rotated array nums that may contain duplicates, return the minimum element of this array.

# You must decrease the overall operation steps as much as possible.

# https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
# related 
# LC 153 https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/
# LC 33  https://leetcode.com/problems/search-in-rotated-sorted-array/
# LC 81  https://leetcode.com/problems/search-in-rotated-sorted-array-ii/

class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = left + (right - left) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            elif nums[mid] < nums[right]:
                right = mid
            else:   # nums[mid] == nums[right] => nums[left] = nums[left + 1] = ... = nums[mid] = nums[right]
                right -= 1  # handle duplicates by narrowing down search space 1 by 1
        return nums[left]

# covert to LC 153
class Solution:
    def findMin(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        # skip duplicates 
        while left < right and nums[left] == nums[-1]: left += 1    
        # while left < right and nums[right] == nums[0]: right -= 1     # same as above line
        while left < right:     # ends at left = right
            mid = (left + right) // 2
            if nums[mid] > nums[right]:
                left = mid + 1
            elif nums[mid] <= nums[right]:
                right = mid
        return nums[left]