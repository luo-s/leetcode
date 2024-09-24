# Given an integer array nums sorted in non-decreasing order, remove some duplicates in-place such that each unique element appears at most twice. 
# The relative order of the elements should be kept the same.

# Since it is impossible to change the length of the array in some languages, 
# you must instead have the result be placed in the first part of the array nums. More formally, 
# if there are k elements after removing the duplicates, then the first k elements of nums should hold the final result. 
# It does not matter what you leave beyond the first k elements.

# Return k after placing the final result in the first k slots of nums.
# Do not allocate extra space for another array. You must do this by modifying the input array in-place with O(1) extra memory.

# https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/
# related
# LC 26 https://leetcode.com/problems/remove-duplicates-from-sorted-array/

# general-purpose solution: each unique element appears at most k times
# for i < k: keep
# for i >= k: compare i with i - k, keep if different

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        def solve(k):
            slow = 0
            for fast in range(len(nums)):
                if slow < k or nums[slow - k] != nums[fast]:
                    nums[slow] = nums[fast]
                    slow += 1
            return slow
        return solve(2)

class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        def solve(k):
            idx = 0
            for num in nums:
                if idx < k or nums[idx - k] != num:
                    nums[idx] = num
                    idx += 1
            return idx
        return solve(2)
