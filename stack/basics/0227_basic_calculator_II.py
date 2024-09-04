# The integer division should truncate toward zero.

# You may assume that the given expression is always valid. All intermediate 
# results will be in the range of [-2^31, 2^31 - 1].

# Note: You are not allowed to use any built-in function which evaluates strings as 
# mathematical expressions, such as eval().

# 1 <= s.length <= 3 * 10^5
# s consists of integers and operators ('+', '-', '*', '/') separated by some 
# number of spaces.
# s represents a valid expression.
# All the integers in the expression are non-negative integers in the range 
# [0, 2^31 - 1].
# The answer is guaranteed to fit in a 32-bit integer.

# https://leetcode.com/problems/basic-calculator-ii/

class Solution:
    def calculate(self, s: str) -> int:
        l, stack, op, index = len(s), [], '+', 0
        while index < l:
            if s[index] == ' ':
                index += 1
                continue
            if s[index].isdigit():
                num = ord(s[index]) - ord('0')
                while index + 1 < l and s[index+1].isdigit():
                    index += 1
                    num = 10 * num + ord(s[index]) - ord('0')
                if op == '+':
                    stack.append(num)
                elif op == '-':
                    stack.append(-num)
                elif op == '*':
                    temp = stack.pop()
                    stack.append(temp * num)
                elif op == '/':
                    temp = stack.pop()
                    stack.append(int(temp / num))
            elif s[index] in "+-*/":
                op = s[index]
            index += 1
        return sum(stack)

