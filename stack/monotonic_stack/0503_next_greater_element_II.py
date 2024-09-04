# Given a circular integer array nums 
# (i.e., the next element of nums[nums.length - 1] is nums[0]), 
# return the next greater number for every element in nums.

# The next greater number of a number x is the first greater number to its 
# traversing-order next in the array, which means you could search circularly 
# to find its next greater number. 
# If it doesn't exist, return -1 for this number.

# 1 <= nums.length <= 10^4
# -10^9 <= nums[i] <= 10^9

# https://leetcode.com/problems/next-greater-element-ii/

class Solution:
    def nextGreaterElements(self, nums: List[int]) -> List[int]:
        l, nums, stack, ans = len(nums), nums * 2, [], [-1] * len(nums) * 2
        for i in range(l * 2):
            while stack and nums[i] > nums[stack[-1]]:
                idx = stack.pop()
                ans[idx] = nums[i]
            stack.append(i)
        return ans[:l]
