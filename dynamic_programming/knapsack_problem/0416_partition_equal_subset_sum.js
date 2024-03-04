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
let dp[i][w] be true if there is a subset of the first i elements that has a sum of w
if w < nums[i - 1], dp[i][w] = dp[i - 1][w]
else, dp[i][w] = dp[i - 1][w] || dp[i - 1][w - nums[i - 1]]
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
