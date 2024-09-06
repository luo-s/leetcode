# Given a non-empty array of integers nums, every element appears twice except for 
# one. Find that single one.

# You must implement a solution with a linear runtime complexity and use only 
# constant extra space.

# 1 <= nums.length <= 3 * 10^4
# -3 * 10^4 <= nums[i] <= 3 * 10^4
# Each element in the array appears twice except for one element which appears only once.

# https://leetcode.com/problems/single-number/

class Solution:
    def singleNumber(self, nums: List[int]) -> int:
        ans = 0
        for num in nums:
            ans ^= num
        return ans