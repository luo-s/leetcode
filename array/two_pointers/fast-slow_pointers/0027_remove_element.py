# Given an integer array nums and an integer val, remove all occurrences of val 
# in nums in-place. The order of the elements may be changed. Then return the 
# number of elements in nums which are not equal to val.

# Consider the number of elements in nums which are not equal to val be k, to get 
# accepted, you need to do the following things:

# Change the array nums such that the first k elements of nums contain the elements 
# which are not equal to val. The remaining elements of nums are not important as 
# well as the size of nums.

# Return k.

# https://leetcode.com/problems/remove-element/

class Solution:
    def removeElement(self, nums: list[int], val: int) -> int:
        slow, fast, l = 0, 0, len(nums)
        while fast < l:
            if nums[fast] != val:
                nums[slow] = nums[fast]
                slow += 1
            fast += 1
        return slow