# Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].

# https://leetcode.com/problems/nth-digit/

# range         |   digit   |   cnt     |   digit_cnt
# 0 ~ 9         |     1     |    9      |      9
# 10 ~ 99       |     2     |   90      |     180
# 100 ~ 999     |     3     |   900     |     2700
# start ~ end   |   digit   | 9 * start | 9 * start * digit

# assume the nth digit belongs to number x
class Solution:
    def findNthDigit(self, n: int) -> int:
        digit, start, count = 1, 1, 9
        # how many digits does x have?
        while n > count: 
            n -= count
            start *= 10
            digit += 1
            count = 9 * start * digit
        # what is x?
        num = start + (n - 1) // digit 
        # what's the nth digit
        return int(str(num)[(n - 1) % digit]) 
