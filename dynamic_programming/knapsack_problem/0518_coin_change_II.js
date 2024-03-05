/*
You are given an integer array coins representing coins of different 
denominations and an integer amount representing a total amount of money.

Return the number of combinations that make up that amount. If that amount 
of money cannot be made up by any combination of the coins, return 0.

You may assume that you have an infinite number of each kind of coin.

The answer is guaranteed to fit into a signed 32-bit integer.

1 <= coins.length <= 300
1 <= coins[i] <= 5000
All the values of coins are unique.
0 <= amount <= 5000
*/

// https://leetcode.com/problems/coin-change-ii/description/

// dynamic programming
// let dp[w] be the number of combinations that make up amount w
// dp[w] = dp[w] + dp[w - coins[i]]
var change = function (amount, coins) {
  let dp = new Array(amount + 1).fill(0);
  // base case: empty subset
  dp[0] = 1;
  for (let i = 0; i < coins.length; i++) {
    for (let w = coins[i]; w <= amount; w++) {
      dp[w] = dp[w] + dp[w - coins[i]];
    }
  }
  return dp[amount];
};
