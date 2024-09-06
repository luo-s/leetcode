# Write a function that takes the binary representation of an unsigned 
# integer and returns the number of '1' bits it has 
# (also known as the Hamming weight).

# The input must be a binary string of length 32.

# https://leetcode.com/problems/number-of-1-bits/description/

class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            res += n & 1
            n >>= 1
        return res

# (n−1):二进制数字 n 最右边的 1 变成 0 ，此 1 右边的 0 都变成 1 。
# n & (n−1):二进制数字 n 最右边的 1 变成 0 ，其余不变。
class Solution:
    def hammingWeight(self, n: int) -> int:
        res = 0
        while n:
            res += 1
            n &= n - 1
        return res


