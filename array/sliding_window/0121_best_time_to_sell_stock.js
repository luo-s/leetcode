/*You are given an array prices where prices[i] is the price of a given stock
 on the ith day.

You want to maximize your profit by choosing a single day to buy one stock 
and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you 
cannot achieve any profit, return 0.
*/
// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/

// sliding window
// time complexity O(n)
// space complexity O(1)
var maxProfit = function (prices) {
  let left = 0;
  let right = 1;
  let result = 0;
  while (right < prices.length) {
    if (prices[left] < prices[right]) {
      result = Math.max(result, prices[right] - prices[left]);
    } else {
      left = right;
    }
    right++;
  }
  return result;
};

// Array higher order function
// time complexity O(n^2)
// space complexity O(1)
var maxProfit = function (prices) {
  let result = 0;
  while (prices.length > 1) {
    let min = Math.min(...prices);
    let max = Math.max(...prices.slice(prices.indexOf(min)));
    result = Math.max(result, max - min);
    prices.splice(prices.indexOf(min));
  }
  return result;
};

// brute force
// time complexity O(n^2) -- time limit exceeded error
// space complexity O(1)
var maxProfit = function (prices) {
  let result = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      const currentProfit = prices[j] - prices[i];
      result = Math.max(max, currentProfit);
    }
  }
  return result;
};
