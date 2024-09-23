# Given a positive integer num, return true if num is a perfect square or false otherwise.

# A perfect square is an integer that is the square of an integer. In other words, it is the product of some integer with itself.

# You must not use any built-in library function, such as sqrt.

# https://leetcode.com/problems/valid-perfect-square/

class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        low, hi = 1, num
        while low <= hi:
            mid = (low + hi) // 2
            if mid * mid < num:
                low = mid + 1
            elif mid * mid > num:
                hi = mid - 1
            else:
                return True
        return False