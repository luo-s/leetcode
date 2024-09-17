# You are given an array prices where prices[i] is the price of a given stock
#  on the ith day.

# You want to maximize your profit by choosing a single day to buy one stock 
# and choosing a different day in the future to sell that stock.

# Return the maximum profit you can achieve from this transaction. If you 
# cannot achieve any profit, return 0.

# https://leetcode.com/problems/best-time-to-buy-and-sell-stock/
# LC 122 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/
# LC 123 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iii/
# LC 184 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-iv/
# LC 309 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-cooldown/
# LC 714 https://leetcode.com/problems/best-time-to-buy-and-sell-stock-with-transaction-fee/

# advanced topic: pairs problem
# LC 1014 https://leetcode.com/problems/best-sightseeing-pair/
# LC 2815 https://leetcode.com/problems/max-pair-sum-in-an-array/
# LC 2874 https://leetcode.com/problems/maximum-value-of-an-ordered-triplet-ii/
# LC 2905 https://leetcode.com/problems/find-indices-with-index-and-value-difference-ii/

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