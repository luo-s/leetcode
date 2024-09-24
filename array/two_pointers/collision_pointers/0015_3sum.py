# Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

# Notice that the solution set must not contain duplicate triplets.

# 3 <= nums.length <= 3000
# -105 <= nums[i] <= 10**5

# https://leetcode.com/problems/3sum/

class Solution:
    def threeSum(self, nums: List[int]) -> List[List[int]]:
        l = len(nums)
        nums.sort()
        res = []
        for first in range(l - 2):
            # nums are sorted, nums[first] must <= 0 
            if nums[first] > 0: break
            # skip the first duplicates
            if first > 0 and nums[first] == nums[first - 1]: continue
            # optimization:
            if nums[first] + nums[first + 1] + nums[first + 2] > 0: break
            if nums[first] + nums[-2] + nums[-1] < 0: continue
            second, third = first + 1, l - 1
            while second < third:
                if second >= third: break
                total = nums[first] + nums[second] + nums[third]
                if total < 0:
                    second += 1
                elif total > 0:
                    third -= 1
                else:
                    res.append([nums[first], nums[second], nums[third]])
                    second += 1
                    while second < third and nums[second] == nums[second - 1]: second += 1
                    third -= 1
                    while third > second and nums[third] == nums[third + 1]: third -= 1
        return res