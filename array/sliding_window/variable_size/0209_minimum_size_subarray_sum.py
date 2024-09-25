# Given an array of positive integers nums and a positive integer target, return the minimal length of a subarraywhose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

# https://leetcode.com/problems/minimum-size-subarray-sum/
# similar
# LC 1208 https://leetcode.com/problems/get-equal-substrings-within-budget/
# lc 713 https://leetcode.com/problems/minimum-size-subarray-sum/

# shortest subarray that sum >= target
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = len(nums)
        left = right = sub_sum = 0
        ans = float('inf')
        while right < l:
            sub_sum += nums[right]
            while sub_sum >= target:
                ans = min(ans, right - left + 1)
                sub_sum -= nums[left]
                left += 1
            right += 1
        return ans if ans < float('inf') else 0

# presum and binary search
# time complexity O(nlogn)
# space complexity O(n)          
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        from bisect import bisect_left
        l = len(nums)
        preSum = [0] * (l + 1)
        ans = float('inf')
        for i in range(l):
            preSum[i + 1] = preSum[i] + nums[i]
        if preSum[-1] < target: return 0
        for i in range(l):
            idx = bisect_left(preSum, preSum[i] + target)
            # subarray total < target: skip
            if idx == l + 1: continue
            ans = min(ans, idx - i)
        return ans