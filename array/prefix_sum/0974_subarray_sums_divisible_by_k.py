# Given an integer array nums and an integer k, return the number of non-empty subarrays that have a sum divisible by k.

# A subarray is a contiguous part of an array.

# https://leetcode.com/problems/subarray-sums-divisible-by-k/
    
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        preSum = res = 0
        cnt = {0:1}  # Initialize with 0 having count 1
        
        for num in nums:
            preSum = (preSum + num) % k
            res += cnt.get(preSum, 0)
            cnt[preSum] = cnt.get(preSum, 0) + 1
        
        return res
    
class Solution:
    def subarraysDivByK(self, nums: List[int], k: int) -> int:
        preSum = res = 0
        cnt = dict()
        
        for num in nums:
            cnt[preSum % k] = cnt.get(preSum % k, 0) + 1
            preSum = (preSum + num) % k
            res += cnt.get(preSum, 0)
        
        return res