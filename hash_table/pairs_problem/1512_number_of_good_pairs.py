# Given an array of integers nums, return the number of good pairs.

# A pair (i, j) is called good if nums[i] == nums[j] and i < j.

# https://leetcode.com/problems/number-of-good-pairs/

class Solution:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        l, ans, cnt = len(nums), 0, dict()
        for i in range(l):
            if nums[i] not in cnt:
                cnt[nums[i]] = 1
            else:
                ans += cnt[nums[i]]
                cnt[nums[i]] += 1
        return ans