# Given an array of integers arr, return the number of subarrays with an odd sum.

# Since the answer can be very large, return it modulo 10**9 + 7.

# https://leetcode.com/problems/number-of-sub-arrays-with-odd-sum/

class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        preSum = res = 0
        MOD = 10 ** 9 + 7
        cnt = {0:1}
        for num in arr:
            preSum = (preSum + num) % 2
            res += cnt.get(not preSum, 0)
            cnt[preSum] = cnt.get(preSum, 0) + 1
        return res % MOD


class Solution:
    def numOfSubarrays(self, arr: List[int]) -> int:
        preSum = res = 0
        MOD = 10 ** 9 + 7
        cnt = dict()
        for num in arr:
            cnt[preSum] = cnt.get(preSum, 0) + 1
            preSum = (preSum + num) % 2
            res += cnt.get(not preSum, 0)
        return res % MOD