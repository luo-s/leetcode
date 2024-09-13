# Given an integer array nums that may contain duplicates, return all 
# possible subsets (the power set).

# The solution set must not contain duplicate subsets. 
# Return the solution in any order.

# https://leetcode.com/problems/subsets-ii/description/

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        res, path, l = [], [], len(nums)
        nums.sort()
        
        def backtracking(nums, idx):
            # base case
            res.append(path[:])
            if len(path) == l:
                return
            # recursive case
            for i in range(idx, l):
                if i > idx and nums[i] == nums[i - 1]: continue
                path.append(nums[i])
                backtracking(nums, i + 1)
                path.pop()

        backtracking(nums, 0)
        return res