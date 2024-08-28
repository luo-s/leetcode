# Given an unsorted integer array nums. Return the smallest positive integer that is not present in nums.

# You must implement an algorithm that runs in O(n) time and uses O(1) auxiliary space.

# https://leetcode.com/problems/first-missing-positive/description/
# https://leetcode.cn/problems/first-missing-positive/solutions/304743/que-shi-de-di-yi-ge-zheng-shu-by-leetcode-solution/

# there are at most n positive integers, so the answer is in range [1, n + 1]
# store all numbers between [1, n] in a hash table, then iterate from 1 to n
#   1) if missing: return i
#   2) if not missing: return n + 1
# make a hash table based on given array to satisfy space complexity O(1)
class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        n = len(nums)
        # change all none-positive numbers to n + 1
        for i in range(n):
            if nums[i] <= 0:
                nums[i] = n + 1
        # use negative values to mark present positive number 
        for i in range(n):
            num = abs(nums[i])
            # for every present positive number < n, 
            # change nums[num - 1] to negative value (nums is 0-indexed)
            # e.g. if 1 present, change nums[0] to negative
            if num <= n:
                nums[num - 1] = -abs(nums[num - 1])
        # check first missing positive number
        for i in range(n):
            # positive value on ith element, means missing i + 1
            if nums[i] > 0:
                return i + 1
        else:
            return n + 1
            
# change positive numbers to corresponding location
# e.g. 1 -> num[0], 5 -> num[0]
class Solution:
    def firstMissingPositive(self, nums: list[int]) -> int:
        n = len(nums)
        for i in range(n):
            while 1 <= nums[i] <= n and nums[nums[i] - 1] != nums[i]:
                nums[nums[i] - 1], nums[i] = nums[i], nums[nums[i] - 1]
        for i in range(n):
            if nums[i] != i + 1:
                return i + 1
        return n + 1
        