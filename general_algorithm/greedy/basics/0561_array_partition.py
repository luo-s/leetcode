# Given an integer array nums of 2n integers, group these integers into n pairs (a1, b1), (a2, b2), ..., (an, bn) such that the sum of min(ai, bi) for all i is maximized. Return the maximized sum.
    
# https://leetcode.com/problems/array-partition/

# to maximize the sum of minimized pair, we need to pair the closest elements together

# greedy
# time complexity O(nlogn)
# space complexity O(1)
class Solution:
    def arrayPairSum(self, nums: List[int]) -> int:
        nums.sort()
        # return sum(nums[::2])
        ans, l = 0, len(nums)
        for i in range(0, l, 2):
            ans += min(nums[i], nums[i + 1])
        return ans
