# Given an integer array nums, find the 
# subarray with the largest sum, and return its sum.

# https://leetcode.com/problems/maximum-subarray/
# similar LC 121 https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

# if preSum < 0: discard
# time complexity O(n)
# space complexity O(1)
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        maxSum, preSum = -float('inf'), 0
        for num in nums:
            preSum = max(preSum + num, num) 
            maxSum = max(maxSum, preSum)
        return maxSum
    
# dynamic programming
# let dp[i] denote the max sum of subarray ending at nums[i]
# if dp[i - 1] < 0: dp[i] = nums[i] 
# if dp[i - 1] >= 0: dp[i] = dp[i - 1] + nums[i]
# time complexity O(n)
# space complexity O(n)
class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        l = len(nums)
        dp = [0 for _ in range(l)]
        dp[0] = nums[0]

        for i in range(1, l):
            if dp[i - 1]< 0:
                dp[i] = nums[i]
            else:
                dp[i] = dp[i - 1] + nums[i]
        return max(dp)

# optimized dp: only need max(dp)
# time complexity O(n)
# space complexity O(1)
class Solution:
    def maxSubArray(self, nums: List[int]) -> int:
        l = len(nums)
        subMax = nums[0]
        ansMax = nums[0]

        for i in range(1, l):
            if subMax < 0:
                subMax = nums[i]
            else:
                subMax += nums[i]
            ansMax = max(ansMax, subMax)
        return ansMax
