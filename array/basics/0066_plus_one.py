# You are given a large integer represented as an integer array digits, where each digits[i] is the ith digit of the integer. The digits are ordered from most significant to least significant in left-to-right order. The large integer does not contain any leading 0's.

# Increment the large integer by one and return the resulting array of digits.

# https://leetcode.com/problems/plus-one/
# similar 
# LC 415 https://leetcode.com/problems/add-strings/

class Solution:
    def plusOne(self, digits: List[int]) -> List[int]:
        l = len(digits)
        ptr = l - 1
        carry = 1
        while ptr >= 0 or carry > 0:
            if ptr >= 0: 
                carry += digits[ptr]
                digits[ptr] = carry % 10
                ptr -= 1
            else:
                digits.insert(0, carry)
            carry //= 10
        return digits

class Solution:
    def plusOne(self, digits: list[int]) -> list[int]:
        l = len(digits)
        ptr = l - 1
        while ptr >= 0 and digits[ptr] == 9:
            digits[ptr] = 0
            ptr -= 1
        if ptr < 0:
            digits.insert(0, 1)
        else:
            digits[ptr] += 1
        return digits