/*
You are given an integer array coins representing coins of different 
denominations and an integer amount representing a total amount of money.

Return the fewest number of coins that you need to make up that amount. 
If that amount of money cannot be made up by any combination of the coins, 
return -1.

You may assume that you have an infinite number of each kind of coin.

1 <= coins.length <= 12
1 <= coins[i] <= 2^31 - 1
0 <= amount <= 10^4
*/

// https://leetcode.com/problems/coin-change/

/*
let dp[i] be the fewest number of coins that sum to w
dp[i] = min(dp[i], dp[i - coins[i]] + 1)
*/
var coinChange = function (coins, amount) {
  let dp = new Array(amount + 1).fill(Infinity);
  // initialization: need 0 (fewest) coins to make up amount 0
  dp[0] = 0;
  for (let i = 0; i < coins.length; i++) {
    for (let w = coins[i]; w <= amount; w++) {
      dp[w] = Math.min(dp[w], dp[w - coins[i]] + 1);
    }
  }
  return dp[amount] === Infinity ? -1 : dp[amount];
};
