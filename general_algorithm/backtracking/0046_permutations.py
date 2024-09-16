# Given an array nums of distinct integers, return all the possible permutations. You can return the answer in any order.

# https://leetcode.com/problems/permutations/description/

class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        res, path, l = [], [], len(nums)
        
        def backtracking(nums):
            # base case
            if len(path) == l:
                res.append(path[:])
                return
            # recursive case
            for i in range(l):
                if nums[i] not in path:
                    path.append(nums[i])
                    backtracking(nums)
                    path.pop()
                
        backtracking(nums)
        return res
    
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        self.res, self.path, self.l = [], [], len(nums)
        self.backtracking(nums)
        return self.res
    
    def backtracking(self, nums: List[int]):
        if len(self.path) == self.l:
            self.res.append(self.path[:])
            return
        for i in range(self.l):
            if nums[i] not in self.path:
                self.path.append(nums[i])
                self.backtracking(nums)
                self.path.pop()
