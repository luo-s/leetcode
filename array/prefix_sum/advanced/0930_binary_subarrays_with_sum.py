# Given a binary array nums and an integer goal, return the number of non-empty subarrays with a sum goal.

# A subarray is a contiguous part of the array.

# https://leetcode.com/problems/binary-subarrays-with-sum/
# same problem LC 560 https://leetcode.com/problems/subarray-sum-equals-k/

class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        preSum = res = 0
        cnt = {0:1}  # Initialize with 0 having count 1
        
        for num in nums:
            preSum += num 
            res += cnt.get(preSum - goal, 0)
            cnt[preSum] = cnt.get(preSum, 0) + 1
        
        return res

class Solution:
    def numSubarraysWithSum(self, nums: List[int], goal: int) -> int:
        preSum = res = 0
        cnt = dict()
        
        for num in nums:
            cnt[preSum] = cnt.get(preSum, 0) + 1
            preSum += num
            res += cnt.get(preSum - goal, 0)
        
        return res

