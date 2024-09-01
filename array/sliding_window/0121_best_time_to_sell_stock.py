# You are given an array prices where prices[i] is the price of a given stock
#  on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock 
# and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you 
# cannot achieve any profit, return 0.

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

# if prices[i + 1] <= price[i], never buy prices[i]
class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        cur_min, max_profit = float('inf'), 0
        for price in prices:
            if price <= cur_min:
                cur_min = price
            else:
                max_profit = max(max_profit, price - cur_min)
        return max_profit