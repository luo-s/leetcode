# Given two integers n and k, return all possible combinations of k numbers chosen from the range [1, n].

# You may return the answer in any order.

# https://leetcode.com/problems/combinations/description/

class Solution:
    def combine(self, n: int, k: int) -> List[List[int]]:
        res, path, nums = [], [], list(range(1, n + 1))
        
        def backtracking(nums, idx):
            # base case
            if len(path) == k:
                res.append(path[:])
                return
            # recursive case
            # use idx to avoid duplicate
            for i in range(idx, n):
                path.append(nums[i])
                backtracking(nums, i + 1)
                path.pop()
        
        backtracking(nums, 0)
        return res