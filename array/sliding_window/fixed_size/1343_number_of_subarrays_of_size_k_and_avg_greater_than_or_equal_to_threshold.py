# Given an array of integers arr and two integers k and threshold, return the number of sub-arrays of size k and average greater than or equal to threshold.

# 1 <= arr.length <= 10**5
# 1 <= arr[i] <= 10**4
# 1 <= k <= arr.length
# 0 <= threshold <= 10**4

# https://leetcode.com/problems/number-of-sub-arrays-of-size-k-and-average-greater-than-or-equal-to-threshold/

class Solution:
    def numOfSubarrays(self, arr: List[int], k: int, threshold: int) -> int:
        left = right = window_sum = ans = 0
        while right < len(arr):
            window_sum += arr[right]
            if right - left + 1 >= k:
                if window_sum >= k * threshold:
                    ans += 1
                window_sum -= arr[left]
                left += 1
            right += 1
        return ans