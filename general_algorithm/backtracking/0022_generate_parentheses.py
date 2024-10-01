# Given n pairs of parentheses, write a function to generate all combinations of well-formed parentheses.

# https://leetcode.com/problems/generate-parentheses/

# permutate n valid pairs of '(' and ')'
# the next can be '(' only if openN < n
# the next can be ')' only if openN > closedN
class Solution:
    def generateParenthesis(self, n: int) -> List[str]:
        stack, res = [], []

        def backtracking(openN, closedN):
            # base case
            if openN == closedN == n:
                res.append(''.join(stack))
                return
            # recursive case
            if openN < n:
                stack.append('(')
                backtracking(openN + 1, closedN)
                stack.pop()
            if closedN < openN:
                stack.append(')')
                backtracking(openN, closedN + 1)
                stack.pop()

        backtracking(0, 0)
        return res