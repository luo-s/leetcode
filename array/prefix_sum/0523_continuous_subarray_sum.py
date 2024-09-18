# Given an integer array nums and an integer k, return true if nums has a good subarray or false otherwise.

# A good subarray is a subarray where:

# its length is at least two, and
# the sum of the elements of the subarray is a multiple of k.
# Note that:

# A subarray is a contiguous part of the array.
# An integer x is a multiple of k if there exists an integer n such that x = n * k. 0 is always a multiple of k.

# https://leetcode.com/problems/continuous-subarray-sum/

class Solution:
    def checkSubarraySum(self, nums: List[int], k: int) -> bool:
        preSum = 0
        # initialize with {0: -1} to handle the case where the entire prefix sum is divisible by k.
        idx = {0:-1} 
        
        for i, num in enumerate(nums):
            preSum = (preSum + num) % k
            if preSum in idx:
                if i - idx[preSum] > 1:
                    return True
            # only add new pairs, never update (keep max subarray length)
            else:
                idx[preSum] = i
        
        return False