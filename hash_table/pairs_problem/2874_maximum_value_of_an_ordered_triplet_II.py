# You are given a 0-indexed integer array nums.

# Return the maximum value over all triplets of indices (i, j, k) such that i < j < k. If all such triplets have a negative value, return 0.

# The value of a triplet of indices (i, j, k) is equal to (nums[i] - nums[j]) * nums[k].

# 1 <= nums[i] <= 10**6

# https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/


# 我们可以在遍历的过程中，维护 nums[i] 的最大值 preMax，同时维护 preMax 减当前元素的最大值 maxDiff，这就是 k 左边 nums[i]−nums[j] 的最大值。
class Solution:
    def maximumTripletValue(self, nums: List[int]) -> int:
        ans = max_diff = pre_max = 0
        for num in nums:
            ans = max(ans, max_diff * num)
            max_diff = max(max_diff, pre_max - num)
            pre_max = max(pre_max, num)
        return ans
