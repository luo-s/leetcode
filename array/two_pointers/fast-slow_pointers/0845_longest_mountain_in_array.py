# You may recall that an array arr is a mountain array if and only if:

# arr.length >= 3
# There exists some index i (0-indexed) with 0 < i < arr.length - 1 such that:
# arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
# arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
# Given an integer array arr, return the length of the longest subarray, which is a mountain. Return 0 if there is no mountain subarray.

# https://leetcode.com/problems/longest-mountain-in-array/

class Solution:
    def longestMountain(self, arr: List[int]) -> int:
        ans = up = down = 0

        for i in range(1, len(arr)):
            if (down and arr[i - 1] < arr[i]) or (arr[i - 1] == arr[i]):
                up = down = 0

            up += arr[i - 1] < arr[i]
            down += arr[i - 1] > arr[i]

            if up and down:
                ans = max(ans, up + down + 1)

        return ans  