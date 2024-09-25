# You are given an integer array nums consisting of n elements, and an integer k.

# Find a contiguous subarray whose length is equal to k that has the maximum average value and return this value. Any answer with a calculation error less than 10-5 will be accepted.

# https://leetcode.com/problems/maximum-average-subarray-i/

class Solution:
    def findMaxAverage(self, nums: List[int], k: int) -> float:
        left = right = window_sum = 0
        l, ans = len(nums), float('-inf')
        while right < l:
            window_sum += nums[right]
            if right - left + 1 == k:
                ans = max(ans, window_sum)
                window_sum -= nums[left]
                left += 1
            right += 1
        return ans / k