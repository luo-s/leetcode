Given a string s, return the number of palindromic substrings in it.

A string is a palindrome when it reads the same backward as forward.

A substring is a contiguous sequence of characters within the string.


# https://leetcode.com/problems/palindromic-substrings/
# similar
# LC 5 https://leetcode.com/problems/longest-palindromic-substring/ 

# dynamic programming
class Solution:
    def countSubstrings(self, s: str) -> int:
        l = len(s)
        if l <= 1: return l
        dp = [[0] * l for _ in range(l)]

        for i in range(l - 1, -1, -1):
            for j in range(i, l):
                dp[i][j] = s[i] == s[j] and (j - i <= 2 or dp[i + 1][j - 1])
        
        return sum(sum(row) for row in dp)
    
# center spread
class Solution:
    def countSubstrings(self, s: str) -> str:
        l = len(s)
        ans = 0
        for i in range(l):
            ans += self.centerSpread(s, i, i)
            ans += self.centerSpread(s, i, i + 1)
        return ans
    
    def centerSpread(self, s: str, start: int, end: int) -> str:
        l = len(s)
        ans = 0
        while start >= 0 and end < l and s[start] == s[end]:
            ans += 1
            start -= 1
            end += 1
        return ans