# Given a non-negative integer x, return the square root of x rounded down to 
# the nearest integer. The returned integer should be non-negative as well.

# You must not use any built-in exponent function or operator.

# For example, do not use pow(x, 0.5) in c++ or x ** 0.5 in python.

# https://leetcode.com/problems/sqrtx/

# linear search
# time complexity O(n)
# space complexity O(1)
class Solution:
    def mySqrt(self, x: int) -> int:
        i = 0
        while True:
            if i * i > x:
                return i - 1
            i += 1

# binary search [0, x] that the smallest i that make i * i > x, ans is i - 1
# time complexity O(logn)
# space compplexity O(1)
class Solution:
    def mySqrt(self, x: int) -> int:
        low, hi = 0, x
        while low <= hi:    # ends at low = hi + 1
            mid = (low + hi) // 2
            if mid * mid <= x:
                low = mid + 1   # possible ans: mid = low - 1
            else:
                hi = mid - 1
        return low - 1      # return hi is the same since hi = low - 1