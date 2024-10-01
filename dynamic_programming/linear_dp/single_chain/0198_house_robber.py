# You are a professional robber planning to rob houses along a street. 
# Each house has a certain amount of money stashed, the only constraint 
# stopping you from robbing each of them is that adjacent houses have 
# security systems connected and it will automatically contact the police 
# if two adjacent houses were broken into on the same night.

# Given an integer array nums representing the amount of money of each house, 
# return the maximum amount of money you can rob tonight without alerting the police.

# 1 <= nums.length <= 100
# 0 <= nums[i] <= 400

# https://leetcode.com/problems/house-robber/

# dynamic programming
class Solution:
    def rob(self, nums: List[int]) -> int:
        l = len(nums)
        if l == 1: return nums[0]
        dp = [0] * l
        dp[0] = nums[0]
        dp[1] = max(nums[0], nums[1])
        for i in range(2, l):
            dp[i] = max(dp[i-1], dp[i-2] + nums[i])
        return dp[l-1]

# greedy
class Solution:
    def rob(self, nums: List[int]) -> int:
        l = len(nums)
        prev = curr = 0
        for num in nums:
            next = max(curr, prev + num)
            prev = curr
            curr = next
        return curr
