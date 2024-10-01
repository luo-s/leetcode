# Given an integer array nums of unique elements, return all possible 
# subsets (the power set).

# The solution set must not contain duplicate subsets. 
# Return the solution in any order.

# https://leetcode.com/problems/subsets/
# similar 
# LC 39 https://leetcode.com/problems/combination-sum/
# advaced
# LC 90 https://leetcode.com/problems/subsets-ii/
# LC 40 https://leetcode.com/problems/combination-sum-ii/

class Solution:
    def subsets(self, nums: List[int]) -> List[List[int]]:
        res, path, l = [], [], len(nums)
        
        def backtracking(idx):
            # base case
            res.append(path[:])
            if idx >= l:
                return
            # recursive case 
            # use idx to avoid duplicate
            for i in range(idx, l):
                path.append(nums[i])
                backtracking(i + 1) # always move forward
                path.pop()
        
        backtracking(0)
        return res