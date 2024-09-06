# Given an integer n, return true if it is a power of two. Otherwise, return false.

# An integer n is a power of two, if there exists an integer x such that n == 2 ** x.

# https://leetcode.com/problems/power-of-two/description/


# bit operation
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        return n > 0 and n & (n - 1) == 0

# brute force
class Solution:
    def isPowerOfTwo(self, n: int) -> bool:
        if n <= 0:
            return False
        while n:
            if n == 1:
                return True
            if n % 2:
                return False
            n /= 2