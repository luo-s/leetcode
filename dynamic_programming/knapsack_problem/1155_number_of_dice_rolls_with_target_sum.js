/*
Given three integers n, k, and target, return the number of possible ways 
(out of the k^n total ways) to roll the dice, so the sum of the face-up 
numbers equals target. 

Since the answer may be too large, return it modulo 10^9 + 7.

1 <= n, k <= 30
1 <= target <= 1000
*/

// https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/description/

/*
multiple knapsack problem:
given numbers of [1, 2, 3, ..., k], pick n that has a sum of target
*/

var numRollsToTarget = function (n, k, target) {
  if (k ** n < target) return 0;
  const mod = 10 ** 9 + 7;
  const nums = Array.from({ length: k }, (item, index) => (item = index + 1));
};
