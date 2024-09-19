# Given two integer arrays nums1 and nums2, return the maximum length of a 
# subarray that appears in both arrays.

# A subarray is a contiguous non-empty sequence of elements within an array.

# 1 <= nums1.length, nums2.length <= 1000
# 0 <= nums1[i], nums2[i] <= 100

# https://leetcode.com/problems/maximum-length-of-repeated-subarray/

# let dp[i][j] denotes the longest common suffix of nums1[:i] and num2[:j]
# dp[i][j] = dp[i - 1][j - 1] + 1 if nums1[i] == nums2[j]
# dp[i][j] = 0 if nums1[i] != nums2[j]
# ans = max(dp)
# time complexity O(n^2)
class Solution:
    def findLength(self, nums1: List[int], nums2: List[int]) -> int:
        l1, l2 = len(nums1), len(nums2)
        dp = [[0 for _ in range(l2 + 1)] for _ in range(l1 + 1)]
        
        for i in range(1, l1 + 1):
            for j in range(1, l2 + 1):
                if nums1[i - 1] == nums2[j - 1]:
                    dp[i][j] = dp[i - 1][j - 1] + 1
        
        return max(map(max, dp)) 
    