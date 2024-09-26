# Given two non-negative integers, num1 and num2 represented as string, return the sum of num1 and num2 as a string.

# You must solve the problem without using any built-in library for handling large integers (such as BigInteger). You must also not convert the inputs to integers directly.

# https://leetcode.com/problems/add-strings/
# similar 
# LC 66 https://leetcode.com/problems/plus-one/

class Solution:
    def addStrings(self, num1: str, num2: str) -> str:
        l1, l2 = len(num1), len(num2)
        p1, p2 = l1 - 1, l2 - 1
        carry = 0
        ans = []
        while p1 >= 0 or p2 >= 0 or carry > 0:
            if p1 >= 0: carry += int(num1[p1])
            if p2 >= 0: carry += int(num2[p2])
            ans.append(carry % 10)
            carry //= 10
            p1 -= 1
            p2 -= 1
        ans.reverse()
        return ''.join(map(str, ans))