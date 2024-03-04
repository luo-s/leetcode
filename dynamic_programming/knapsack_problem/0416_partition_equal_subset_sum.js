/*
Given an integer array nums, return true if you can partition the array 
into two subsets such that the sum of the elements in both subsets is equal 
or false otherwise.

1 <= nums.length <= 200
1 <= nums[i] <= 100
*/

// https://leetcode.com/problems/partition-equal-subset-sum/description/
// related https://leetcode.com/problems/subsets-ii/description/

/*
brute force: backtracking get all subsets, check if any subset's sum is equal to sum / 2
if sum % 2 !== 0, return false
time complexity: O(2^n)
space complexity: O(2^n * n)
*/
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2) return false;
  let target = nums.reduce((acc, cur) => acc + cur, 0) / 2;
  // backtracking to get all subsets
  var subsetsWithDup = function (nums) {
    let result = [];
    let path = [];
    nums.sort((a, b) => a - b);
    let used = new Array(nums.length).fill(false);
    var backtracking = function (nums, index) {
      result.push([...path]);
      if (index >= nums.length) return;
      for (let i = index; i < nums.length; i++) {
        if (i > 0 && nums[i] === nums[i - 1] && !used[i - 1]) continue;
        path.push(nums[i]);
        used[i] = true;
        backtracking(nums, i + 1);
        path.pop();
        used[i] = false;
      }
    };
    backtracking(nums, 0);
    return result;
  };
  return subsetsWithDup(nums).some(
    (subset) => subset.reduce((acc, cur) => acc + cur, 0) === target
  );
};

/* dynamic programming
this is a 0/1 knapsack problem
sum / 2 is the capacity of the knapsack
let dp[i][w] be true if there is a subset of the first i elements that 
has a sum of w: check dp[n][sum / 2] === true
1) if w < nums[i - 1], dp[i][w] = dp[i - 1][w]
2) else, dp[i][w] = dp[i - 1][w] || dp[i - 1][w - nums[i - 1]]
time complexity: O(n * sum)
space complexity: O(n * sum)
*/
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2) return false;
  let target = sum / 2;
  let n = nums.length;
  let dp = new Array(n + 1)
    .fill(0)
    .map(() => new Array(target + 1).fill(false));
  // dp[i][0] is always true: empty case -> sum == 0 == w
  for (let i = 0; i <= n; i++) {
    dp[i][0] = true;
  }
  // dp[0][w] is always false: empty subset -> sum == 0 < w
  for (let w = 0; w <= target; w++) {
    dp[0][w] = false;
  }
  // loop throuth all elements
  for (let i = 1; i <= n; i++) {
    // loop throuth all possible sum
    for (let w = 1; w <= target; w++) {
      // if nums[i-1] > limit, we can't include it
      if (w < nums[i - 1]) {
        dp[i][w] = dp[i - 1][w];
        // else we can include or not include
      } else {
        dp[i][w] = dp[i - 1][w] || dp[i - 1][w - nums[i - 1]];
      }
    }
  }
  return dp[n][target];
};

/* another approach: 
let dp[i][w] be the maximum sum of a subset of the first i elements that 
with the limit of w = sum / 2: check dp[n][sum / 2] === sum / 2
1) if w < nums[i - 1], dp[i][w] = dp[i - 1][w]
2) else, dp[i][w] = max(dp[i - 1][w], dp[i - 1][w - nums[i - 1]] + nums[i - 1])
*/
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2) return false;
  let target = sum / 2;
  let n = nums.length;
  let dp = new Array(n + 1).fill(0).map(() => new Array(target + 1).fill(0));
  // dp[i][0] is always 0: empty subset -> sum == 0
  for (let i = 0; i <= n; i++) {
    dp[i][0] = 0;
  }
  // dp[0][w] is always 0: empty subset -> sum == 0
  for (let w = 0; w <= target; w++) {
    dp[0][w] = 0;
  }
  // loop throuth all elements
  for (let i = 1; i <= n; i++) {
    // loop throuth all possible sum
    for (let w = 1; w <= target; w++) {
      // if nums[i-1] > limit, we can't include it
      if (w < nums[i - 1]) {
        dp[i][w] = dp[i - 1][w];
        // else we can include or not include
      } else {
        dp[i][w] = Math.max(
          dp[i - 1][w],
          dp[i - 1][w - nums[i - 1]] + nums[i - 1]
        );
      }
    }
  }
  return dp[n][target] === target;
};

/* optimized space complexity
let dp[w] be the max sum of subset with the limit of w = sum / 2
1) if w < nums[i], dp[w] = dp[w]
2) else, dp[w] = max(dp[w], dp[w - nums[i - 1] + nums[i - 1]])
*/
var canPartition = function (nums) {
  let sum = nums.reduce((acc, cur) => acc + cur, 0);
  if (sum % 2) return false;
  let target = sum / 2;
  let dp = new Array(target + 1).fill(0);
  // loop throuth all elements
  for (let i = 0; i < nums.length; i++) {
    // reverse loop the weight
    // we don't need to update dp[w] if w < nums[i - 1]
    // technically, we can only loop from target to nums[i - 1]
    for (let w = target; w >= 0; w--) {
      if (w >= nums[i])
        dp[w] = Math.max(dp[w], dp[w - nums[i - 1]] + nums[i - 1]);
      else dp[w] = dp[w];
    }
    // for (let w = target; w >= nums[i - 1]; w--) {
    //   dp[w] = Math.max(dp[w], dp[w - nums[i - 1]] + nums[i - 1]);
    // }
  }
  return dp[target] === target;
};
