# You are given a 0-indexed integer array nums having length n, an integer indexDifference, and an integer valueDifference.

# Your task is to find two indices i and j, both in the range [0, n - 1], that satisfy the following conditions:

# abs(i - j) >= indexDifference, and
# abs(nums[i] - nums[j]) >= valueDifference
# Return an integer array answer, where answer = [i, j] if there are two such indices, and answer = [-1, -1] otherwise. If there are multiple choices for the two indices, return any of them.

# Note: i and j may be equal.

# 0 <= nums[i] <= 10**9

# https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/

# 不妨假设 i 在左，j 在右，即 i ≤ j − indexDifference。
# 枚举 j，寻找左边的 i。要想满足 ∣nums[i] − nums[j]∣ ≥ valueDifference，要找的 nums[i] 应当尽量大或者尽量小，这样差的绝对值才能尽量大。
# 在枚举 j 的同时，维护 nums[0] 到 nums[j − indexDifference] 中的最大值 mx 和最小值 mn。
# 满足 mx − nums[j] ≥ valueDifference 或者 nums[j] − mn ≥ valueDifference 即为答案

class Solution:
    def findIndices(self, nums: List[int], indexDifference: int, valueDifference: int) -> List[int]:
        max_idx = min_idx = 0
        for j in range(indexDifference, len(nums)):
            i = j - indexDifference
            if nums[i] > nums[max_idx]:
                max_idx = i
            elif nums[i] < nums[min_idx]:
                min_idx = i
            if nums[max_idx] - nums[j] >= valueDifference:
                return [max_idx, j]
            if nums[j] - nums[min_idx] >= valueDifference:
                return [min_idx, j]
        return [-1, -1]
