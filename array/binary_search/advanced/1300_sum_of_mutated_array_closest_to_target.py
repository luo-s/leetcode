# Given an integer array arr and a target value target, return the integer value such that when we change all the integers larger than value in the given array to be equal to value, the sum of the array gets as close as possible (in absolute difference) to target.

# In case of a tie, return the minimum such integer.

# Notice that the answer is not neccesarilly a number from arr.

# https://leetcode.com/problems/sum-of-mutated-array-closest-to-target/

# binary search [0, max(arr)]
class Solution:
    def findBestValue(self, arr: List[int], target: int) -> int:
        left, right = 0, max(arr)
        res = dis = float('inf')
        
        def sum_replace(arr, mid):
            return sum([min(num, mid) for num in arr])

        while left <= right:
            mid = (left + right) // 2
            total = sum_replace(arr, mid)
            # update res
            if abs(total - target) < dis:
                dis = abs(total - target)
                res = mid
            if abs(total - target) == dis: 
                res = min(res, mid)
            # binary search
            if total > target:
                right = mid - 1
            else:
                left = mid + 1
        return res
