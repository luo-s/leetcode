/*
Given three integers n, k, and target, return the number of possible ways 
(out of the k^n total ways) to roll the dice, so the sum of the face-up 
numbers equals target. 

Since the answer may be too large, return it modulo 10^9 + 7.

1 <= n, k <= 30
1 <= target <= 1000
*/

// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/

/* depth first search -- time limit exceeded
let dfs(i, j) be the number of ways to get sum j with i dices
dfs(i, j) = dfs(i - 1, j - 1) + dfs(i - 1, j - 2) + ... + dfs(i - 1, j - k)
// time complexity: O(k^n)
// Space complexity: O(n)
*/
var numRollsToTarget = function (n, k, target) {
  // corner cases
  if (target < n || target > n * k) return 0;
  const MOD = 10 ** 9 + 7;
  function dfs(dice, sum) {
    // base cases
    if (sum < 0) return 0;
    if (dice === 0) return sum === 0;
    let res = 0;
    for (let diceFaceValue = 1; diceFaceValue <= k; diceFaceValue++) {
      res += dfs(dice - 1, sum - diceFaceValue) % MOD;
    }
    return res;
  }
  return dfs(n, target);
};

// memoization
// time complexity: O(n * target * k)
// space complexity: O(n * target)
var numRollsToTarget = function (n, k, target) {
  // corner cases
  if (target < n || target > n * k) return 0;
  const MOD = 10 ** 9 + 7;
  let memo = new Map();
  function dfs(dice, sum) {
    // base cases
    if (dice === 0) return sum === 0;
    let key = `${dice}-${sum}`;
    if (memo.has(key)) return memo.get(key);
    let res = 0;
    for (
      let diceFaceValue = 1;
      diceFaceValue <= k && diceFaceValue <= sum; // ganrantee sum - diceFaceValue >= 0
      diceFaceValue++
    ) {
      res = (res + dfs(dice - 1, sum - diceFaceValue)) % MOD;
    }
    memo.set(key, res);
    return res;
  }
  return dfs(n, target);
};

/* bottom-up dynamic programming
let dp[i][j] be the number of ways to get sum j with i dices
dp[i][j] = dp[i - 1][j - 1] + dp[i - 1][j - 2] + ... + dp[i - 1][j - k]
*/
// time complexity: O(n * target * k)
// space complexity: O(n * target)
var numRollsToTarget = function (n, k, target) {
  // corner cases
  if (target < n || target > n * k) return 0;
  const MOD = 10 ** 9 + 7;
  let dp = new Array(n + 1).fill().map(() => new Array(target + 1).fill(0));
  dp[0][0] = 1;
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= target; j++) {
      for (
        let diceFaceValue = 1;
        diceFaceValue <= k && diceFaceValue <= j;
        diceFaceValue++
      ) {
        dp[i][j] = (dp[i][j] + dp[i - 1][j - diceFaceValue]) % MOD;
      }
    }
  }
  return dp[n][target];
};
