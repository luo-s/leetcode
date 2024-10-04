/*
You are given an integer array prices where prices[i] is the price of a 
given stock on the ith day.

On each day, you may decide to buy and/or sell the stock. 
You can only hold at most one share of the stock at any time. 

However, you can buy it then immediately sell it on the same day.

Find and return the maximum profit you can achieve.

1 <= prices.length <= 3 * 10^4
0 <= prices[i] <= 10^4
*/

// https://leetcode.com/problems/best-time-to-buy-and-sell-stock-ii/description/

/*
greedy: make every single profit because we can buy and sell on the same day 
e.g. [1, 2, 3] could be 1 -> 2 and 2 -> 3, the same as 1 -> 3
compare every two days:
1) if profitable, (prices[i] > prices[i-1]), add to profit
2) if not profitable, (prices[i] <= prices[i-1]), move on, price[i-1] becomes useless
*/
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 1; i < prices.length; i++) {
    if (prices[i] > prices[i - 1]) profit += prices[i] - prices[i - 1];
  }
  return profit;
};
