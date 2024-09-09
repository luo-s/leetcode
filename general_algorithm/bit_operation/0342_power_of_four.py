# Given an integer n, return true if it is a power of four. Otherwise, return false.

# An integer n is a power of four, if there exists an integer x such that n == 4 ** x.

# https://leetcode.com/problems/power-of-four/description/


# bit mask
# only 1 bit-1 and it's on odd position from right
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0 and (n & 0xaaaaaaaa) == 0 
    
# math
# 4 ** x = (3 + 1) ** x = 1 (mod 3)
# 4 ** x * 2 = 2 (mod 3)            
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        return n > 0 and (n & (n - 1)) == 0 and n % 3 == 1

# brute force
class Solution:
    def isPowerOfFour(self, n: int) -> bool:
        if n <= 0:
            return False
        while n:
            if n == 1:
                return True
            if n % 4:
                return False
            n /= 4