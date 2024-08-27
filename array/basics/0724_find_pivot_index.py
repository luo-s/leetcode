# Given an array of integers nums, calculate the pivot index of this array.

# The pivot index is the index where the sum of all the numbers strictly 
# to the left of the index is equal to the sum of all the numbers strictly 
# to the index's right.

# If the index is on the left edge of the array, then the left sum is 0 
# because there are no elements to the left. This also applies to the 
# right edge of the array.

# Return the leftmost pivot index. If no such index exists, return -1.

# https://leetcode.com/problems/find-pivot-index/

# brute force: time O(n^2)
class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        l = len(nums)
        for i in range(l):
            left, right = 0, 0
            for j in range(0, i):
                left += nums[j]
            for j in range(i+1, l):
                right += nums[j]
            if left == right:
                return i
        return -1

# optimized: time O(n)
class Solution:
    def pivotIndex(self, nums: list[int]) -> int:
        l, sum, left = len(nums), 0, 0
        for i in range(l):
            sum += nums[i]
        for i in range(l):
            if left * 2 == sum - nums[i]:
                return i
            else: left += nums[i]
        return -1
            
