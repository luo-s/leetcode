# You are a professional robber planning to rob houses along a street. 
# Each house has a certain amount of money stashed. 
# All houses at this place are arranged in a circle. 
# That means the first house is the neighbor of the last one. 
# Meanwhile, adjacent houses have a security system connected, and it will 
# automatically contact the police if two adjacent houses were broken into 
# on the same night.

# Given an integer array nums representing the amount of money of each house, 
# return the maximum amount of money you can rob tonight without alerting the police.

# https://leetcode.com/problems/house-robber-ii/

class Solution:
    def rob(self, nums: List[int]) -> int:
        if len(nums) == 1: return nums[0]
        
        def linear_rob(nums):
            l = len(nums)
            if l == 1: return nums[0]
            dp = [0] * l
            dp[0] = nums[0]
            dp[1] = max(nums[0], nums[1])
            for i in range(2, l):
                dp[i] = max(dp[i-1], dp[i-2] + nums[i])
            return dp[l-1]
        
        return max(linear_rob(nums[1:]), linear_rob(nums[:-1]))