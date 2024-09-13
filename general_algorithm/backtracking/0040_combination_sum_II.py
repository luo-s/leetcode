# Given a collection of candidate numbers (candidates) and a target number (target), find all unique combinations in candidates where the candidate numbers sum to target.

# Each number in candidates may only be used once in the combination.

# Note: The solution set must not contain duplicate combinations.

# https://leetcode.com/problems/combination-sum-ii/description/

class Solution:
    def combinationSum2(self, candidates: List[int], target: int) -> List[List[int]]:
        res, path, l = [], [], len(candidates)
        candidates.sort()
        
        def backtracking(candidates, target, idx):
            # base case
            if target == 0:
                res.append(path[:]) 
                return
            if target < 0: return
            # recursive case
            for i in range(idx, l):
                # Skip duplicates in the same level of recursion
                if i > idx and candidates[i] == candidates[i - 1]:
                    continue
                path.append(candidates[i])
                backtracking(candidates, target - candidates[i], i + 1)  
                path.pop()
        
        backtracking(candidates, target, 0)
        return res
            