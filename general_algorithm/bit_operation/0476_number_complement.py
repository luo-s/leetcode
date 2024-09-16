# The complement of an integer is the integer you get when you flip all the 0's to 1's and all the 1's to 0's in its binary representation.

# For example, The integer 5 is "101" in binary and its complement is "010" which is the integer 2.
# Given an integer num, return its complement.

# https://leetcode.com/problems/number-complement/description/

# math/XOR
class Solution:
    def findComplement(self, num: int) -> int:
        # get bit length
        l = num.bit_length()
        # l = 0
        # while num >= 2 ** l:
        #     l += 1
        
        # bit flip
        return num ^ 2 ** l - 1
        # return 2 ** l - 1 - num
    