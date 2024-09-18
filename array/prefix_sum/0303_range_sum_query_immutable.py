# Given an integer array nums, handle multiple queries of the following type:

# Calculate the sum of the elements of nums between indices left and right inclusive where left <= right.
# Implement the NumArray class:

# NumArray(int[] nums) Initializes the object with the integer array nums.
# int sumRange(int left, int right) Returns the sum of the elements of nums between indices left and right inclusive (i.e. nums[left] + nums[left + 1] + ... + nums[right]).

# https://leetcode.com/problems/range-sum-query-immutable/

class NumArray:
    def __init__(self, nums: list[int]):
        # s = list(accumulate(nums, initial=0))
        s = [0] * (len(nums) + 1)
        for i, v in enumerate(nums):
            s[i + 1] = s[i] + v
        self.s = s

    def sumRange(self, left: int, right: int) -> int:
        return self.s[right + 1] - self.s[left]
