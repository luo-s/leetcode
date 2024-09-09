# Given an integer array nums and an integer k, return true if there are two distinct indices i and j in the array such that nums[i] == nums[j] and abs(i - j) <= k.

# https://leetcode.com/problems/contains-duplicate-ii/description/

class Solution:
    def containsNearbyDuplicate(self, nums: list[int], k: int) -> bool:
        nums_map, l = dict(), len(nums)
        for i in range(l):
            if nums[i] not in nums_map:
                nums_map[nums[i]] = i
            else:
                if i - nums_map[nums[i]] <= k:
                    return True
                nums_map[nums[i]] = i
        return False
