# You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

# Return the index of the peak element.

# Your task is to solve it in O(log(n)) time complexity.

# https://leetcode.com/problems/peak-index-in-a-mountain-array/

class Solution:
    def peakIndexInMountainArray(self, arr: list[int]) -> int:
        left, right = 0, len(arr) - 1
        while left < right:
            mid = left + (right - left) // 2
            if arr[mid] > arr[mid - 1]:
                left = mid
            if arr[mid] > arr[mid + 1]:
                right = mid
        return left
    
class Solution:
    def peakIndexInMountainArray(self, arr: list[int]) -> int:
        left, right = 1, len(arr)-1
        while left <= right:
            mid = left + (right - left) // 2
            if arr[mid - 1] > arr[mid] > arr[mid + 1]:
                right = mid - 1
            elif arr[mid - 1] < arr[mid] < arr[mid + 1]:
                left = mid + 1
            else:
                return mid
        return mid