# You are given a 0-indexed array nums consisting of positive integers. You can choose two indices i and j, such that i != j, and the sum of digits of the number nums[i] is equal to that of nums[j].

# Return the maximum value of nums[i] + nums[j] that you can obtain over all possible indices i and j that satisfy the conditions.

# https://leetcode.com/problems/max-sum-of-a-pair-with-equal-sum-of-digits/

class Solution:
    def maximumSum(self, nums: List[int]) -> int:
        ans, d = -1, dict()
        for num in nums:
            digitSum = sum(map(int, str(num)))
            if digitSum not in d:
                d[digitSum] = num
            else:
                ans = max(ans, num + d[digitSum])
                d[digitSum] = max(num, d[digitSum])
        return ans
        