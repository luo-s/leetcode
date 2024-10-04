# A parentheses string is valid if and only if:

# It is the empty string,
# It can be written as AB (A concatenated with B), where A and B are valid strings, or
# It can be written as (A), where A is a valid string.
# You are given a parentheses string s. In one move, you can insert a parenthesis at any position of the string.

# For example, if s = "()))", you can insert an opening parenthesis to be "(()))" or a closing parenthesis to be "())))".
# Return the minimum number of moves required to make s valid.

# https://leetcode.com/problems/minimum-add-to-make-parentheses-valid/
# similar
# LC 22 https://leetcode.com/problems/generate-parentheses/

class Solution:
    def minAddToMakeValid(self, s: str) -> int:
        ans = cnt_open = cnt_close = 0
        for c in s:
            if c == '(':
                cnt_open += 1
            else:
                cnt_close += 1
            # add cnt_open if cnt_close is more
            if cnt_close > cnt_open:
                ans += 1
                cnt_open += 1
        # add cnt_close if cnt_open is more at end
        ans += (cnt_open - cnt_close)
        return ans