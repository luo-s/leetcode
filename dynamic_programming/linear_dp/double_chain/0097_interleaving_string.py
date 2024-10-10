# Given strings s1, s2, and s3, find whether s3 is formed by an interleaving of s1 and s2.

# An interleaving of two strings s and t is a configuration where s and t are divided into n and m 
# substrings
#  respectively, such that:

# s = s1 + s2 + ... + sn
# t = t1 + t2 + ... + tm
# |n - m| <= 1
# The interleaving is s1 + t1 + s2 + t2 + s3 + t3 + ... or t1 + s1 + t2 + s2 + t3 + s3 + ...
# Note: a + b is the concatenation of strings a and b.

# https://leetcode.com/problems/interleaving-string/

# recursion - TLE
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        l1, l2, l3 = len(s1), len(s2), len(s3)
        # base case
        if l3 != l1 + l2:
            return False
        if l1 == l2 == l3 == 0:
            return True
        # recursive case:
        if l1 > 0 and l2 > 0:
            if s3[0] == s1[0] == s2[0]:
                return self.isInterleave(s1[1:], s2, s3[1:]) or self.isInterleave(s1, s2[1:], s3[1:])
            elif s3[0] == s1[0]:
                return self.isInterleave(s1[1:], s2, s3[1:])
            elif s3[0] == s2[0]:
                return self.isInterleave(s1, s2[1:], s3[1:])
            else:
                return False
        elif l1 > 0:
            return self.isInterleave(s1[1:], s2, s3[1:]) if s3[0] == s1[0] else False
        elif l2 > 0:
            return self.isInterleave(s1, s2[1:], s3[1:]) if s3[0] == s2[0] else False

# let dp[i][j] denotes if s3[:i + j] is interleaving of s1[:i] and s2[:j]
# dp[0][0] = True
# dp[i][j] = True if (dp[i - 1][j] and s3[i + j] == s1[i]) or (dp[i][j - 1] and s3[i + j] == s2[j])
# dp[l1][l2] denotes if s3is interleaving of s1 and s2
class Solution:
    def isInterleave(self, s1: str, s2: str, s3: str) -> bool:
        l1, l2, l3 = len(s1), len(s2), len(s3)
        if l3 != l1 + l2:
            return False
        
        # Initialize the DP table
        dp = [[False] * (l2 + 1) for _ in range(l1 + 1)]
        dp[0][0] = True
        
        # Fill the first column (s1 interleaving with an empty s2)
        for i in range(1, l1 + 1):
            dp[i][0] = dp[i - 1][0] and s1[i - 1] == s3[i - 1]
        
        # Fill the first row (s2 interleaving with an empty s1)
        for j in range(1, l2 + 1):
            dp[0][j] = dp[0][j - 1] and s2[j - 1] == s3[j - 1]
        
        # Fill the rest of the DP table
        for i in range(1, l1 + 1):
            for j in range(1, l2 + 1):
                dp[i][j] = (dp[i - 1][j] and s1[i - 1] == s3[i + j - 1]) or (dp[i][j - 1] and s2[j - 1] == s3[i + j - 1])
        
        # Return the result at the bottom-right corner
        return dp[l1][l2]


                
        
