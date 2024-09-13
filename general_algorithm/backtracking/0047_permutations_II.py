# Given a collection of numbers, nums, that might contain duplicates, return all possible unique permutations in any order.

# https://leetcode.com/problems/permutations-ii/description/
# same code could be used to solve LC46 by deleting line 21 ~ 23

class Solution:
    def permuteUnique(self, nums: List[int]) -> List[List[int]]:
        res, path, l = [], [], len(nums)
        used = [False] * l
        nums.sort()
        def backtracking(nums):
            # base case
            if len(path) == l:
                res.append(path[:])
                return
            # recursive case
            for i in range(l):
                # if this element has been used
                if used[i]:
                    continue
                # If nums[i - 1] hasn’t been used, it means that starting a new permutation branch with nums[i] would result in the same permutation as starting with nums[i - 1]. Therefore, we skip it to avoid duplicates.
                if i > 0 and nums[i] == nums[i - 1] and not used[i - 1]:
                    continue
                path.append(nums[i])
                used[i] = True
                backtracking(nums)
                path.pop()
                used[i] = False
                
        backtracking(nums)
        return res