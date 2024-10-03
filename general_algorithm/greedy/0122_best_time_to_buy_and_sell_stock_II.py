# You are given an integer array prices where prices[i] is the price of a given stock on the ith day.

# On each day, you may decide to buy and/or sell the stock. You can only hold at most one share of the stock at any time. However, you can buy it then immediately sell it on the same day.

# Find and return the maximum profit you can achieve.

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/

# dynamic programming
# let dp[i] be the max profit can get end at ith day
# dp[0] = 0
# for every j < i and prices[j] < prices[i]: dp[i] = max(dp[i], dp[j] + prices[i] - prices[j])
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        l = len(prices)
        dp = [0] * l
        for i in range(1, l):
            for j in range(i):
                if prices[j] < prices[i]:
                    dp[i] = max(dp[i], dp[j] + prices[i] - prices[j])
        return dp[l - 1]

# greedy
# if prices[i] > prices[i - 1]: do it
class Solution:
    def maxProfit(self, prices: List[int]) -> int:
        ans = 0
        for i in range(1, len(prices)):
            ans += max(0, prices[i] - prices[i-1])
        return ans
