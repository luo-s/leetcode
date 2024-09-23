# A peak element is an element that is strictly greater than its neighbors.

# Given a 0-indexed integer array nums, find a peak element, and return its index. 
# If the array contains multiple peaks, return the index to any of the peaks.

# You may imagine that nums[-1] = nums[n] = -∞. In other words, an element is 
# always considered to be strictly greater than a neighbor that is outside the 
# array.

# nums[i] != nums[i + 1] for all valid i.

# You must write an algorithm that runs in O(log n) time.

# https://leetcode.com/problems/find-peak-element/

# 直接法
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left <= right:
            mid = (left + right) // 2
            # Check the boundary conditions
            if (mid == 0 or nums[mid] > nums[mid - 1]) and (mid == len(nums) - 1 or nums[mid] > nums[mid + 1]):
                return mid  # Found the peak
            elif mid > 0 and nums[mid] < nums[mid - 1]:
                right = mid - 1  # Peak is in the left half
            else:
                # If nums[mid] is not a peak and not less than nums[mid - 1], 
                # then it means nums[mid] < nums[mid + 1]
                left = mid + 1  # Peak is in the right half

class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        l = len(nums)
        left, right = 0, l - 1
        while left <= right:
            mid = (left + right) // 2
            # Check the boundary conditions for mid to avoid out-of-bounds access
            if (mid == 0 or nums[mid] > nums[mid - 1]) and (mid == l - 1 or nums[mid] > nums[mid + 1]):
                return mid  # Found the peak
            
            elif mid < l - 1 and nums[mid] > nums[mid + 1]:
                right = mid - 1  # Peak is in the left half
            
            else:  # nums[mid] < nums[mid + 1]
                left = mid + 1  # Peak is in the right half


# 排除法
# last iterations: right = left + 1, we have two nunbers, nums[left], nums[right], and nums[right] > nums[right + 1]. Due to the design of this problem, nums[left/mid] < nums[right], left will always move to right/mid + 1, and that will be the peak.
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:     # ends at left == right
            mid = (left + right) // 2
            if nums[mid] < nums[mid + 1]:   
                left = mid + 1  # peak in [mid + 1, right]
            elif nums[mid] > nums[mid + 1]:
                right = mid     # peak in [left, mid], nums[right] always > nums[right + 1]
        return left

# another approach
class Solution:
    def findPeakElement(self, nums: List[int]) -> int:
        left, right = 0, len(nums) - 1
        while left < right:
            mid = (left + right + 1) // 2
            if nums[mid] > nums[mid - 1]:
                left = mid
            elif nums[mid] < nums[mid - 1]:
                right = mid - 1
        return left
