# You have intercepted a secret message encoded as a string of numbers. The message is decoded via the following mapping:

# "1" -> 'A'

# "2" -> 'B'

# ...

# "25" -> 'Y'

# "26" -> 'Z'

# However, while decoding the message, you realize that there are many different ways you can decode the message because some codes are contained in other codes ("2" and "5" vs "25").

# For example, "11106" can be decoded into:

# "AAJF" with the grouping (1, 1, 10, 6)
# "KJF" with the grouping (11, 10, 6)
# The grouping (1, 11, 06) is invalid because "06" is not a valid code (only "6" is valid).
# Note: there may be strings that are impossible to decode.

# Given a string s containing only digits, return the number of ways to decode it. If the entire string cannot be decoded in any valid way, return 0.

# The test cases are generated so that the answer fits in a 32-bit integer.

# https://leetcode.com/problems/decode-ways/

# let dp[0][i] denotes the number of ways to decode s[:i] with s[i - 1] as a letter
# let dp[1][i] denotes the number of ways to decode s[:i] with s[i - 2: i] as a letter
# dp[0][0] = 1 and dp[1][0] = 0
# dp[1][i] = dp[0][i - 1] if s[i - 1] == '1' or (s[i - 1] == '2' and s[i] <= '6'); otherwise 0
# dp[0][i] = 0 if s[i] == '0'; otherwise dp[0][i - 1] + dp[1][i - 1]
# total ways of decoding is dp[0][l - 1] + dp[1][l - 1]
class Solution:
    def numDecodings(self, s: str) -> int:
        if s[0] == '0': return 0
        l = len(s)
        if l <= 1: return l
        dp = [[0] * l for _ in range(2)]
        dp[0][0] = 1
        for i in range(1, l):
            if s[i] == '0':
                dp[0][i] = 0
            else:
                dp[0][i] = dp[0][i - 1] + dp[1][i - 1]
            if s[i - 1] == '1' or (s[i - 1] == '2' and s[i] <= '6'):
                dp[1][i] = dp[0][i - 1]
            else:
                dp[1][i] = 0
        return dp[0][l - 1] + dp[1][l - 1]