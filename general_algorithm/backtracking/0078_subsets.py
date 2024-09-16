# Given an integer array nums of unique elements, return all possible 
# subsets (the power set).

# The solution set must not contain duplicate subsets. 
# Return the solution in any order.

# https://leetcode.com/problems/subsets/description/

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res, path, l = [], [], len(nums)
        
        def backtracking(nums, idx):
            # base case
            res.append(path[:])
            if idx >= l:
                return
            # recursive case 
            # use idx to avoid duplicate
            for i in range(idx, l):
                path.append(nums[i])
                backtracking(nums, i + 1)
                path.pop()
        
        backtracking(nums, 0)
        return res