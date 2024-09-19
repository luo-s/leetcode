# Given an integer array nums, return the length of the longest strictly 
# increasing subsequence.

# A subsequence is an array that can be derived from another array by deleting 
# some or no elements without changing the order of the remaining elements.

# 1 <= nums.length <= 2500
# -10^4 <= nums[i] <= 10^4

# https://leetcode.com/problems/longest-increasing-subsequence/

# brute force 
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        @cache
        def LIS_start(start_idx):
            if start_idx == len(nums): return 1
            ans, l = 1, len(nums)
            for i in range(start_idx + 1, l):
                if nums[start_idx] < nums[i]:
                    ans = max(ans, 1 + LIS_start(i))
            return ans

        ans, l = 1, len(nums)
        for i in range(l):
            ans = max(ans, LIS_start(i))
        return ans

# memoization
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        table = dict()
        def LIS_start(start_idx):
            # check memo first
            if start_idx in table:
                return table[start_idx]
            # base case
            if start_idx == len(nums): return 1
            # recursive case
            ans, l = 1, len(nums)
            for i in range(start_idx + 1, l):
                if nums[start_idx] < nums[i]:
                    ans = max(ans, 1 + LIS_start(i))
            table[start_idx] = ans
            return ans

        ans, l = 1, len(nums)
        for i in range(l):
            ans = max(ans, LIS_start(i))
        return ans
    
# dynamic programming O(n^2)
# dp[i] denotes the length of LIS that ends with nums[i]
# for every j that 0 <= j < i and nums[j] < nums[i]: dp[i] = max(dp[i], dp[j] + 1)
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        l = len(nums)
        dp = [1] * (l + 1)
        for i in range(1, l):
            for j in range(0, i):
                if nums[j] < nums[i]:
                    dp[i] = max(dp[i], dp[j] + 1)
        return max(dp)
    
# greedy + binary search O(nlogn)
from bisect import bisect_left
class Solution:
    def lengthOfLIS(self, nums: List[int]) -> int:
        if not nums:
            return 0
        LIS = []
        for num in nums:
            # Use binary search to find the index of the first element in LIS that is >= num
            idx = bisect_left(LIS, num)
            # If num is larger than any element in LIS, append it
            if idx == len(LIS):
                LIS.append(num)
            else:
                # Replace the existing element to maintain the smallest possible value
                LIS[idx] = num
        # The length of LIS will be the length of the Longest Increasing Subsequence
        return len(LIS)