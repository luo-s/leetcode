# The array-form of an integer num is an array representing its digits in 
# left to right order.

# For example, for num = 1321, the array form is [1,3,2,1].
# Given num, the array-form of an integer, and an integer k, 
# return the array-form of the integer num + k.

# 1 <= num.length <= 10^4
# 0 <= num[i] <= 9
# num does not contain any leading zeros except for the zero itself.
# 1 <= k <= 10^4

# https://leetcode.com/problems/add-to-array-form-of-integer/

# brute force
class Solution:
    def addToArrayForm(self, num: list[int], k: int) -> list[int]:
        return [int(i) for i in str(int(''.join(map(str,num))) + k)]

class Solution:
    def addToArrayForm(self, num: list[int], k: int) -> list[int]:
        ans = []
        num2 = [int(i) for i in str(k)]
        i, j, carry = len(num) - 1, len(num2) - 1, 0
        while (i >= 0 or j >= 0 or carry > 0):
            sum = carry
            if i >= 0:
                sum += num[i]
                i -= 1
            if j >= 0:
                sum += num2[j]
                j -= 1
            # use (append in loop + reverse) O(n) to avoid (insert in loop) O(n^2)
            ans.append(sum % 10)
            carry = sum // 10
        ans.reverse()
        return ans


        
        
        