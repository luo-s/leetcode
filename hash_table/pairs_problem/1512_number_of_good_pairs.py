# Given an array of integers nums, return the number of good pairs.

# A pair (i, j) is called good if nums[i] == nums[j] and i < j.

# https://leetcode.com/problems/number-of-good-pairs/description/

class Solution:
    def numIdenticalPairs(self, nums: list[int]) -> int:
        # cnt, l = 0, len(nums)
        # for i in range(l - 1):
        #     for j in range(i + 1, l):
        #         if nums[i] == nums[j]:
        #             cnt += 1
        # return cnt
        l, ans, cnt = len(nums), 0, dict()
        for i in range(l):
            if nums[i] not in cnt:
                cnt[nums[i]] = 1
            else:
                ans += cnt[nums[i]]
                cnt[nums[i]] += 1
        return ans