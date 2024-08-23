# Given an integer array nums, rotate the array to the right by k steps,
# where k is non-negative.

# https://leetcode.com/problems/rotate-array

# time complexity: O(n)
# space complexity: O(n)
class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        l = len(nums)
        k %= l
        nums[:] = nums[l - k:] + nums[:l - k]
        """
        Do not return anything, modify nums in-place instead.
        """

# time complexity: O(n)
# space complexity: O(1)
class Solution:
    def rotate(self, nums: list[int], k: int) -> None:
        def reverse(nums, left, right):
            while left < right:
                nums[left], nums[right] = nums[right], nums[left]
                left += 1
                right -= 1
        l = len(nums)
        k %= l
        reverse(nums, 0, l - 1)
        reverse(nums, 0, k - 1)
        reverse(nums, k, l - 1)
        """
        Do not return anything, modify nums in-place instead.
        """