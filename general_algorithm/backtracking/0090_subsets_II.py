# Given an integer array nums that may contain duplicates, return all 
# possible subsets (the power set).

# The solution set must not contain duplicate subsets. 
# Return the solution in any order.

# https://leetcode.com/problems/subsets-ii/
# related
# LC 78 https://leetcode.com/problems/subsets/
# LC 39 https://leetcode.com/problems/combination-sum/
# similar:
# LC 40 https://leetcode.com/problems/combination-sum-ii/

class Solution:
    def subsetsWithDup(self, nums: List[int]) -> List[List[int]]:
        ans, path, l = [], [], len(nums)
        nums.sort()
        
        def backtracking(idx):
            ans.append(path[:])
            # base case
            if idx >= l:
                return  
            # recursive case
            for i in range(idx, l):
                # skip duplicates
                if i > idx and nums[i] == nums[i - 1]: 
                    continue
                path.append(nums[i])
                backtracking(i + 1) # always move forward
                path.pop()
        
        backtracking(0)
        return ans