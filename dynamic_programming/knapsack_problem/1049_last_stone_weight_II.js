/*
You are given an array of integers stones where stones[i] is the weight of the ith stone.

We are playing a game with the stones. On each turn, we choose any two 
stones and smash them together. Suppose the stones have weights x and y 
with x <= y. The result of this smash is:

If x == y, both stones are destroyed, and
If x != y, the stone of weight x is destroyed, and the stone of weight y 
has new weight y - x.

At the end of the game, there is at most one stone left.

Return the smallest possible weight of the left stone. 
If there are no stones left, return 0.

1 <= stones.length <= 30
1 <= stones[i] <= 100
*/

// https://leetcode.com/problems/last-stone-weight-ii/
// related https://leetcode.com/problems/target-sum/description/

/*
similar to target sum problem, divide the stones into two groups,
and minimize the difference between the two groups.
let sum1, sum2 be the sum of the two groups, then:
sum1 + sum2 = sum(stones)
sum1 - sum2 = result (assume sum1 >= sum2, result >= 0)
then: sum2 = (sum(stones) - result) / 2 <= sum(stones) / 2
0-1 knapsack problem: find an subset that max(sum2) <= sum(stones) / 2 
let dp[w] be the max sum of a subset that has sum <= w
dp[w] = max(dp[w], dp[w - stones[i - 1] + stones[i - 1])
*/
var lastStoneWeightII = function (stones) {
  let sum = stones.reduce((acc, cur) => acc + cur, 0);
  let limit = Math.floor(sum / 2);
  let dp = new Array(limit + 1).fill(0);
  dp[0] = 0;
  for (let i = 0; i < stones.length; i++) {
    for (let w = limit; w >= stones[i]; w--) {
      dp[w] = Math.max(dp[w], dp[w - stones[i]] + stones[i]);
    }
  }
  return sum - 2 * dp[limit];
};
