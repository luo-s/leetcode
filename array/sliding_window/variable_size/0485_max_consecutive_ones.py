# Given a binary array nums, return the maximum number of consecutive 1's in the array.

# https://leetcode.com/problems/max-consecutive-ones/

# sliding window
class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        left = right = ans = 0
        while right < len(nums):
            if nums[right] == 1:
                ans = max(ans, right - left + 1)
            else:
                left = right + 1
            right += 1
        return ans

# traversal
class Solution:
    def findMaxConsecutiveOnes(self, nums: list[int]) -> int:
        ans, cnt = 0, 0
        for num in nums:
            if num == 1:
                cnt += 1
                ans = max(ans, cnt)
            # restart when num == 0
            else:
                cnt = 0
        return ans