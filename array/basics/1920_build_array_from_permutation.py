# Given a zero-based permutation nums (0-indexed), 
# build an array ans of the same length where ans[i] = nums[nums[i]] for each 0 <= i < nums.length and return it.

# A zero-based permutation nums is an array of distinct integers from 0 to nums.length - 1 (inclusive).

# https://leetcode.com/problems/build-array-from-permutation/description/

# brute force
class Solution:
    def buildArray(self, nums: list[int]) -> list[int]:
        ans = [0] * (len(nums))
        for i in range(len(nums)):
            ans[i] = nums[nums[i]]
        return ans

# in-place transformation technique
class Solution:
    def buildArray(self, nums: list[int]) -> list[int]:  
        n = len(nums)
        for i in range(n):
            nums[i] = nums[i] + n * (nums[nums[i]] % n)
        for i in range(n):
            nums[i] = nums[i] // n
        return nums