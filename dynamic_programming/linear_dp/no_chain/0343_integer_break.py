# Given an integer n, break it into the sum of k positive integers, 
# where k >= 2, and maximize the product of those integers.

# Return the maximum product you can get.
# 2 <= n <= 58

# https://leetcode.com/problems/integer-break/

# math: for n > 4: make each piece integer the closest to e, which is 3
class Solution:
    def integerBreak(self, n: int) -> int:
        if n == 2: return 1
        if n == 3: return 2
        if n == 4: return 4
        else:
            ans = 1
            while n > 4:
                ans *= 3
                n -= 3
            return ans * n

# dp[i] 表示为：将正整数 i 拆分为至少 2 个正整数的和之后，这些正整数的最大乘积。
class Solution:
    def integerBreak(self, n: int) -> int:
        dp = [0 for _ in range(n + 1)]
        for i in range(2, n + 1):
            for j in range(i):
                dp[i] = max(dp[i], (i - j) * j, dp[i - j] * j)
        return dp[n]
