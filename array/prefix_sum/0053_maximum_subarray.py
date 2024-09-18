# Given an integer array nums, find the 
# subarray with the largest sum, and return its sum.

# https://leetcode.com/problems/maximum-subarray/
# similar LC 121 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

# if preSum < 0: discard
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        maxSum, preSum = -float('inf'), 0
        for num in nums:
            preSum = max(preSum + num, num) 
            maxSum = max(maxSum, preSum)
        return maxSum