# You are given an integer array nums and an integer x. In one operation, you can either remove the leftmost or the rightmost element from the array nums and subtract its value from x. Note that this modifies the array for future operations.

# Return the minimum number of operations to reduce x to exactly 0 if it is possible, otherwise, return -1.

# https://leetcode.com/problems/minimum-operations-to-reduce-x-to-zero/
# similar
# LC 1423 https://leetcode.com/problems/maximum-points-you-can-obtain-from-cards/

# consider the array left, need the max length of array left that sum = total - x
class Solution:
    def minOperations(self, nums: List[int], x: int) -> int:
        total, l = sum(nums), len(nums)
        # edge case
        if total < x: return -1
        if total == x: return l
        left = right = mx_size = window_sum = 0

        while right < l:
            window_sum += nums[right]
            while window_sum > total - x:
                window_sum -= nums[left]
                left += 1
            if window_sum == total - x:
                mx_size = max(mx_size, right - left + 1)
            right += 1
        
        return l - mx_size if mx_size > 0 else -1
    