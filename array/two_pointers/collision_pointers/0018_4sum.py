# Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

# 0 <= a, b, c, d < n
# a, b, c, and d are distinct.
# nums[a] + nums[b] + nums[c] + nums[d] == target
# You may return the answer in any order.

# https://leetcode.com/problems/4sum/

# the cost of duplicate checkers > redundant calculations
# avoid duplicate checkers as much as possible
# only check duplicates when total == target 

class Solution:
    def fourSum(self, nums: List[int], target: int) -> List[List[int]]:
        l = len(nums)
        nums.sort()
        ans = []
        for a in range(l - 3):
            if a > 0 and nums[a] == nums[a - 1]: continue
            # optimization
            if nums[a] + nums[a + 1] + nums[a + 2] + nums[a + 3] > target: break
            if nums[a] + nums[-3] + nums[-2] + nums[-1] < target: continue
            for b in range(a + 1, l - 2):
                if b > a + 1 and nums[b] == nums[b - 1]: continue
                # optimization
                if nums[a] + nums[b] + nums[b + 1] + nums[b + 2] > target: break
                if nums[a] + nums[b] + nums[-2] + nums[-1] < target: continue
                c, d = b + 1, l - 1
                while c < d:
                    if c >= d: break
                    total = nums[a] + nums[b] + nums[c] + nums[d]
                    if total < target:
                        c += 1
                    elif total > target:
                        d -= 1
                    else:
                        ans.append([nums[a], nums[b], nums[c], nums[d]])
                        c += 1
                        while c < d and nums[c] == nums[c - 1]: c += 1
                        d -= 1
                        while d > c and nums[d] == nums[d + 1]: d -= 1
        return ans