# Given a string s, you can transform every letter individually to be lowercase or uppercase to create another string.

# Return a list of all possible strings we could create. Return the output in any order.

# https://leetcode.com/problems/letter-case-permutation/description/
# similar: LC17 https://leetcode.com/problems/letter-combinations-of-a-phone-number/

class Solution:
    def letterCasePermutation(self, s: str) -> List[str]:
        res, comb, l = [], '', len(s)
        
        def backtracking(idx, comb):
            # base case
            if idx == l:
                res.append(comb[:])
                return
            # recursive case
            if s[idx].isdigit():
                backtracking(idx + 1, comb + s[idx])
            else:
                backtracking(idx + 1, comb + s[idx].upper())
                backtracking(idx + 1, comb + s[idx].lower())
        
        backtracking(0, comb)
        return res