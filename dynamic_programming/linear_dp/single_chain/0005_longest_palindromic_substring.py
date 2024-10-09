# Given a string s, return the longest palindromic substring in s.

# https://leetcode.com/problems/longest-palindromic-substring/
# similar
# LC 647 https://leetcode.com/problems/palindromic-substrings/

# center spread
class Solution:
    def longestPalindrome(self, s: str) -> str:
        l = len(s)
        if l <= 1: return s
        res = ''
        for i in range(l):
            temp1 = self.centerSpread(s, i, i)
            if len(temp1) > len(res):
                res = temp1
            temp2 = self.centerSpread(s, i, i + 1)
            if len(temp2) > len(res):
                res = temp2
        return res
    # find longest palingromic substring with certain start and end
    def centerSpread(self, s: str, start: int, end: int) -> str:
        l = len(s)
        while start >= 0 and end < l and s[start] == s[end]:
            start -= 1
            end += 1
        return s[start + 1 : end]
        
# dynamic programming
# let dp[i][j] be true if s[i:j] is a palindrome
# 1) if s[i] == s[j]:
#   if j - i <= 2, dp[i][j] is True
#   if j - i > 2, dp[i][j] = dp[i + 1][j - 1]
# 2) if s[i] != s[j]: dp[i][j] is False
# 
class Solution:
    def longestPalindrome(self, s: str) -> str:
        l = len(s)
        if l <= 1: return s
        dp = [[False] * l for _ in range(l)]
        res = ''

        for i in range(l - 1, -1, -1):
            for j in range(i, l):
                dp[i][j] = s[i] == s[j] and (j - i <= 2 or dp[i + 1][j - 1])
                if dp[i][j] and j - i + 1 > len(res):
                    res = s[i : j + 1]
        return res