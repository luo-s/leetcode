/*
You are given an integer array nums and an integer target.

You want to build an expression out of nums by adding one of the symbols 
'+' and '-' before each integer in nums and then concatenate all the 
integers.

For example, if nums = [2, 1], you can add a '+' before 2 and a '-' before 
1 and concatenate them to build the expression "+2-1".

Return the number of different expressions that you can build, 
which evaluates to target.

1 <= nums.length <= 20
0 <= nums[i] <= 1000
0 <= sum(nums[i]) <= 1000
-1000 <= target <= 1000
*/

// https://leetcode.com/problems/target-sum/description/

// dfs
// time complexity: O(2^n)
// space complexity: O(n)
var findTargetSumWays = function (nums, target) {
  var dfs = function (i, curSum) {
    if (i === nums.length) {
      return curSum === target ? 1 : 0;
    }
    return dfs(i + 1, curSum + nums[i]) + dfs(i + 1, curSum - nums[i]);
  };
  return dfs(0, 0);
};

// dfs with memoization (top-down dp)
// time complexity: O(2^n)
// space complexity: O(n)
var findTargetSumWays = function (nums, target) {
  let memo = new Map();
  var dfs = function (i, curSum) {
    if (i === nums.length) {
      return curSum === target ? 1 : 0;
    }
    let key = `${i} & ${curSum}`;
    if (memo.has(key)) {
      return memo.get(key);
    }
    let result = dfs(i + 1, curSum + nums[i]) + dfs(i + 1, curSum - nums[i]);
    memo.set(key, result);
    return result;
  };
  return dfs(0, 0);
};

/* knapsack problem
let elements with + be x, and elements with - be y:
so, sumX - sumY = target
also, sumX + sumY = sum(nums)
then: sumX = (target + sum(nums)) / 2
0-1 knapsack problem: find an subset of nums that has sum equal to (target + sum(nums)) / 2
let dp[w] be there are dp[w] ways to fill a knapsack of size w
dp[w] = dp[w] + dp[w - nums[i]]
*/
var findTargetSumWays = function (nums, target) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  // corner cases
  if (Math.abs(target) > Math.abs(sum)) return 0;
  if ((sum + target) % 2 !== 0) return 0;
  // 0-1 knapsack problem, with weight = (sum + target) / 2
  let dp = new Array((sum + target) / 2 + 1).fill(0);
  // base case: empty subset
  dp[0] = 1;
  // fill the knapsack, loop through the first i elements
  for (let i = 0; i < nums.length; i++) {
    // reverse loop through the weight
    // if w < nums[i], dp[w] is not changed
    for (let w = (sum + target) / 2; w >= nums[i]; w--) {
      dp[w] += dp[w - nums[i]];
    }
  }
  return dp[(sum + target) / 2];
};
