# Given an integer array nums, return the number of longest increasing subsequences.

# Notice that the sequence has to be strictly increasing.

# https://leetcode.com/problems/number-of-longest-increasing-subsequence/

#  let dp[i] be length of LIS ending at index i
#  let count[i] be number of LIS ending at index i
#  for every 0 <= j < i, if nums[j] < nums[i], then dp[i] = max(dp[i], dp[j] + 1)
#  1) if dp[j] + 1 > dp[i]: length of LIS increase, count[i] = count[j]
#  2) if dp[j] + 1 === dp[i], length of LIS not change, count[i] += count[j]
#  3) if dp[j] + 1 < dp [i], LIS ending at nums[i] not affected, continue
class Solution:
    def findNumberOfLIS(self, nums: List[int]) -> int:
        l = len(nums)
        dp = [1] * l
        count = [1] * l
        for i in range(1, l):
            for j in range(i):
                if nums[j] < nums[i]:
                    if dp[j] + 1 > dp[i]:
                        dp[i] = dp[j] + 1
                        count[i] = count[j]
                    elif dp[j] + 1 == dp[i]:
                        count[i] += count[j]
        mx = max(dp)
        ans = 0
        for i in range(l):
            if dp[i] == mx:
                ans += count[i]
        return ans
 

