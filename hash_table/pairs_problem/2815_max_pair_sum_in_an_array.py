# You are given an integer array nums. You have to find the maximum sum of a pair of numbers from nums such that the largest digit in both numbers is equal.

# For example, 2373 is made up of three distinct digits: 2, 3, and 7, where 7 is the largest among them.

# Return the maximum sum or -1 if no such pair exists.

# https://leetcode.com/problems/max-pair-sum-in-an-array/

# 桶思想
class Solution:
    def maxSum(self, nums: List[int]) -> int:
        ans = -1
        # maintain an array to track the current largest number with max_d of 0 ~ 9 (use an array as a hash table)
        # 把该数字装进桶里
        max_val = [float('-inf')] * 10
        for num in nums:
            # calculate the max_d
            max_d = max(map(int, str(num)))
            # update ans
            ans = max(ans, num + max_val[max_d])
            # update max_val
            max_val[max_d] = max(max_val[max_d], num)
        return ans

