# Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

# The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the 
# frequency of at least one of the chosen numbers is different.

# The test cases are generated such that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
 
# https://leetcode.com/problems/combination-sum/
# similar
# LC 78 https://leetcode.com/problems/subsets/
# advanced
# LC 40 https://leetcode.com/problems/combination-sum-ii/
# LC 90 https://leetcode.com/problems/subsets-ii/

class Solution:
    def combinationSum(self, candidates: List[int], target: int) -> List[List[int]]:
        res, path, l = [], [], len(candidates)
        
        def backtracking(target, idx):
            # base case
            if target == 0:
                res.append(path[:])
                return
            if target < 0: 
                return
            # recursive case
            for i in range(idx, l):
              path.append(candidates[i])
              backtracking(target - candidates[i], i)
              path.pop()
          
        backtracking(target, 0)
        return res