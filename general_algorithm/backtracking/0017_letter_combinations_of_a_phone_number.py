# Given a string containing digits from 2-9 inclusive, return all possible letter 
# combinations that the number could represent. Return the answer in any order.

# A mapping of digits to letters (just like on the telephone buttons) is given below.
# Note that 1 does not map to any letters.

# 0 <= digits.length <= 4
# digits[i] is a digit in the range ['2', '9'].

# https://leetcode.com/problems/letter-combinations-of-a-phone-number/

class Solution:
    def letterCombinations(self, digits: str) -> List[str]:
        if not digits: return []

        keyboard = {
            '2': 'abc',
            '3': 'def',
            '4': 'ghi',
            '5': 'jkl',
            '6': 'mno',
            '7': 'pqrs',
            '8': 'tuv',
            '9': 'wxyz',
        }

        res, comb, l = [], '', len(digits)
        def backtracking(idx, comb):
            # base case
            if idx == l:
                res.append(comb[:])
                return
            # recursive case
            for letter in keyboard[digits[idx]]:
                backtracking(idx + 1, comb + letter)
            # for i in range(len(keyboard[digits[idx]])):
            #     backtracking(idx + 1, comb + keyboard[digits[idx]][i])

        backtracking(0, comb)
        return res
