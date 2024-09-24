# Given an integer array nums sorted in non-decreasing order, remove the 
# duplicates in-place such that each unique element appears only once. 
# The relative order of the elements should be kept the same. 
# Then return the number of unique elements in nums.

# Consider the number of unique elements of nums to be k, to get accepted, 
# you need to do the following things:

# Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
# Return k.

# https://leetcode.com/problems/remove-duplicates-from-sorted-array/
# advanced
# LC 80 https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/

# nums is sorted, thus same elements are next to each other
class Solution:
    def removeDuplicates(self, nums: list[int]) -> int:
        slow, fast, l = 0, 1, len(nums)
        while fast < l:
            # new element
            if nums[fast] != nums[slow]:
                slow += 1
                nums[slow] = nums[fast]
            # same element
            else:
                fast += 1
        return slow + 1
    