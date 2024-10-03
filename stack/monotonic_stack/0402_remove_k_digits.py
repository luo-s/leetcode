# Given string num representing a non-negative integer num, and an integer k, return the smallest possible integer after removing k digits from num.

# https://leetcode.com/problems/remove-k-digits/

# monotone stack
class Solution:
    def removeKdigits(self, num: str, k: int) -> str:
        # Edge case: if k equals the length of num, the smallest number is 0
        if k == len(num):
            return '0'
        stack = []
        # Greedily remove digits
        for digit in num:
            # Pop from the stack while the current digit is smaller than the previous digit in stack
            # and we still need to remove digits (k > 0).
            while k > 0 and stack and stack[-1] > digit:
                stack.pop()
                k -= 1
            stack.append(digit)
        # If there are still digits to remove, pop them from the end of the stack
        stack = stack[:-k] if k > 0 else stack
        # Convert list back to string and strip leading zeros
        result = ''.join(stack).lstrip('0')
        # If the result is an empty string, return '0'
        return result if result else '0'




        

        
        
