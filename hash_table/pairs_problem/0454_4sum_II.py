# Given four integer arrays nums1, nums2, nums3, and nums4 all of length n, return the number of tuples (i, j, k, l) such that:

# 0 <= i, j, k, l < n
# nums1[i] + nums2[j] + nums3[k] + nums4[l] == 0

# https://leetcode.com/problems/4sum-ii/

# 正常枚举O(n^4), 1-3分组枚举O(n^3), 两两分组枚举O(n^2)
import collections
class Solution:
    def fourSumCount(self, nums1: List[int], nums2: List[int], nums3: List[int], nums4: List[int]) -> int:
        countAB = collections.Counter(u + v for u in nums1 for v in nums2)
        ans = 0
        for u in nums3:
            for v in nums4:
                if -(u + v) in countAB:
                    ans += countAB[-(u + v)]
        return ans
