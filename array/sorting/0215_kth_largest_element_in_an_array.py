# Given an integer array nums and an integer k, return the kth largest element in 
# the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct 
# element.

# Can you solve it without sorting?

# https://leetcode.com/problems/kth-largest-element-in-an-array/

# counting sort -- TLE
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        ma, mi, l = max(nums), min(nums), len(nums)
        cnt = [0 for _ in range(ma - mi + 1)]
        for i in range(l):
            cnt[nums[i] - mi] += 1
        count = 0
        for i in range(ma - mi, -1, -1):
            count += cnt[i]
            if count >= k:
                return i + mi