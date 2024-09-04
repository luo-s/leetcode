# You are given a 0-indexed integer array nums. 
# In one step, remove all elements nums[i] where nums[i - 1] > nums[i] for all 0 < i < nums.length.

# Return the number of steps performed until nums becomes a non-decreasing array.

# https://leetcode.com/problems/steps-to-make-array-non-decreasing/description/

class Solution:
    def totalSteps(self, nums: List[int]) -> int:
        