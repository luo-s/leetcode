# Given an array of positive integers nums and a positive integer target, return the minimal length of a subarraywhose sum is greater than or equal to target. If there is no such subarray, return 0 instead.

# https://leetcode.com/problems/minimum-size-subarray-sum/

# time complexity O(n)
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        total, mx, l = sum(nums), max(nums), len(nums)
        if total < target: return 0
        if total == target: return l
        if mx == target: return 1
        left = right = sub_sum = 0
        ans = l
        while left < l and right < l:
            sub_sum += nums[right]
            while sub_sum >= target:
                ans = min(ans, right - left + 1)
                sub_sum -= nums[left]
                left += 1
            right += 1
        return ans
    
# optimized: O(n)
class Solution:
    def minSubArrayLen(self, target: int, nums: List[int]) -> int:
        l = len(nums)
        left = right = sub_sum = 0
        ans = l + 1
        while right < l:
            sub_sum += nums[right]
            while sub_sum >= target:
                ans = min(ans, right - left + 1)
                sub_sum -= nums[left]
                left += 1
            right += 1
        return ans if ans < l + 1 else 0
                
        