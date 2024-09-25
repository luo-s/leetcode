# Given an unsorted array of integers nums, return the length of the longest 
# continuous increasing subsequence (i.e. subarray). The subsequence must be 
# strictly increasing.

# A continuous increasing subsequence is defined by two indices l and r (l < r) 
# such that it is [nums[l], nums[l + 1], ..., nums[r - 1], nums[r]] and for each 
# l <= i < r, nums[i] < nums[i + 1].

# https://leetcode.com/problems/longest-continuous-increasing-subsequence/

class Solution:
    def findLengthOfLCIS(self, nums: List[int]) -> int:
        left, right, ans = 0, 1, 1
        while right < len(nums):
            if nums[right] <= nums[right - 1]:
                ans = max(ans, right - left)
                left = right
            right += 1
        return max(ans, right - left)