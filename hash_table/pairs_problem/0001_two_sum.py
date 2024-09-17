# Given an array of integers nums and an integer target, return indices of the 
# two numbers such that they add up to target.

# You may assume that each input would have exactly one solution, and you may 
# not use the same element twice.

# Only one valid answer exists.
# You can return the answer in any order.


# https://leetcode.com/problems/two-sum/
# advanced LC 219 https://leetcode.com/problems/contains-duplicate-ii/

class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        map = dict()
        # traverse nums
        for i in range(len(nums)):
            # calculate the completion
            completion = target - nums[i]
            # if have seen before, return both indexes
            if completion in map:
                return [map.get[completion], i]
            # if haven't seen before, add {num : index} to map 
            else:
                map[nums[i]] = i