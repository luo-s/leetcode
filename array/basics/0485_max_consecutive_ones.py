# Given a binary array nums, return the maximum number of consecutive 1's 
# in the array.

# http://leetcode.com/problems/max-consecutive-ones/

# binary array featuers
class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        max_cnt, cnt = 0, 0
        for i in nums:
            if i == 1:
                cnt += 1
                max_cnt = max(max_cnt, cnt)
            else:
                cnt = 0
        return max_cnt
            