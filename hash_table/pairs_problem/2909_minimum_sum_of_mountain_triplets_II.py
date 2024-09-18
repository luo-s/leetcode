# You are given a 0-indexed array nums of integers.

# A triplet of indices (i, j, k) is a mountain if:

# i < j < k
# nums[i] < nums[j] and nums[k] < nums[j]
# Return the minimum possible sum of a mountain triplet of nums. If no such triplet exists, return -1.

# https://leetcode.com/problems/minimum-sum-of-mountain-triplets-ii/

class Solution:
    def minimumSum(self, nums: List[int]) -> int:
        l, left, right = len(nums), [float('inf')] * l, [float('inf')] * l
        
        # nums[i]左边的最小值
        mi = nums[0]
        for i in range(1, l):
            if nums[i] > mi:
                left[i] = mi
            else:
                mi = nums[i]
        # nums[i]右边的最小值
        mi = nums[l - 1]
        for i in range(l - 2, -1, -1):
            if nums[i] > mi:
                right[i] = mi
            else:
                mi = nums[i]
        # 枚举 j 使得 left[i] + right[i] + nums[i] 最小
        ans = float('inf')
        for i in range(1, l - 1):
            ans = min(ans, left[i] + right[i] + nums[i])
        
        return ans if ans != float('inf') else -1