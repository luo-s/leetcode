# You are given an integer array nums. You are initially positioned at the array's first index, and each element in the array represents your maximum jump length at that position.

# Return true if you can reach the last index, or false otherwise.

# https://leetcode.com/problems/jump-game/

# dynamic programming
# time complexity O(n^2)
# space complexity O(n)
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        l = len(nums)
        dp = [False] * l
        dp[0] = True
        for i in range(l):
            if dp[i]:
                for j in range(1, min(nums[i] + 1, l - i)):
                    dp[i + j] = True
                    if dp[l - 1]:
                        return True
        return dp[l - 1]

# greedy
# if we can reach i from j, we can reach all indexed in [j, i]
# let mx be the mx index that can be reach, mx = 0
# loop through nums, mx = max(mx, i + nums[i])
class Solution:
    def canJump(self, nums: List[int]) -> bool:
        mx, l = 0, len(nums)
        for i in range(l):
            if i <= mx:
                mx = max(mx, i + nums[i])
        return mx >= l - 1



        