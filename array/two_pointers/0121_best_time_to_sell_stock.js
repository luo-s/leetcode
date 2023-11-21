/*
You are given an array prices where prices[i] is the price of a given stock on the ith day.

You want to maximize your profit by choosing a single day to buy one stock and choosing a different day in the future to sell that stock.

Return the maximum profit you can achieve from this transaction. If you cannot achieve any profit, return 0.
*/

// optimize: divide into multiple non-decreasing subarray
// two-pointers
// time complexity O(n)
// space complexity O(1)
var maxProfit = function (prices) {
  let ans = 0;
  let start = 0,
    end = 1;
  while (end < prices.length) {
    if (prices[end] <= prices[start]) start = end;
    else ans = Math.max(ans, prices[end] - prices[start]);
    end++;
  }
  return ans;
};

// brute force
// time complexity O(n)
// space complexity O(1)
var maxProfit = function (prices) {
  let ans = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    for (let j = i + 1; j < prices.length; j++) {
      let diff = prices[j] - prices[i];
      ans = Math.max(ans, diff);
    }
  }
  return ans;
};
