# You are given an integer array bloomDay, an integer m and an integer k.

# You want to make m bouquets. To make a bouquet, you need to use k adjacent flowers from the garden.

# The garden consists of n flowers, the ith flower will bloom in the bloomDay[i] and then can be used in exactly one bouquet.

# Return the minimum number of days you need to wait to be able to make m bouquets from the garden. If it is impossible to make m bouquets return -1.

# https://leetcode.com/problems/minimum-number-of-days-to-make-m-bouquets/

# binary search [min(bloomDay), max(bloomDay)]
class Solution:
    def minDays(self, bloomDay: List[int], m: int, k: int) -> int:
        l = len(bloomDay)
        if l < m * k: return -1
        # number of bouquets can make with given flowers and k
        def bouquets(arr, k):
            cnt = 0
            left = right = 0
            while right < len(arr):
                if arr[right] == 1:
                    if right - left + 1 == k:
                        cnt += 1
                        left = right + 1
                else:
                    left = right + 1
                right += 1
            return cnt
        
        # def bouquets(arr, k):
        #     cnt = 0
        #     flowers = 0
        #     for bloom in arr:
        #         if bloom == 1:
        #             flowers += 1
        #             if flowers == k:
        #                 cnt += 1
        #                 flowers = 0  # Reset after forming a bouquet
        #         else:
        #             flowers = 0  # Reset if a non-bloomed flower is found
        #     return cnt
        
        left, right = min(bloomDay), max(bloomDay)
        while left <= right:
            mid = (left + right) // 2
            n = bouquets([1 if num <= mid else 0 for num in bloomDay], k)
            if n >= m:
                right = mid - 1
            else:
                left = mid + 1
        return left
            



