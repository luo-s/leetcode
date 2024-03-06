/*
Given an integer array nums, return the maximum possible sum of elements 
of the array such that it is divisible by three.

1 <= nums.length <= 4 * 10^4
1 <= nums[i] <= 10^4
*/

// https://leetcode.com/problems/greatest-sum-divisible-by-three/description/

/*
brute force dfs -- time limit exceeded
time complexity: O(2^n) -- each element has 2 choices, include or not include
space complexity: O(n) -- call stack
*/
var maxSumDivThree = function (nums) {
  let maxSum = 0;
  let dfs = (index, curSum) => {
    if (index >= nums.length) return;
    let sum = curSum + nums[index];
    if (sum % 3 === 0) {
      maxSum = Math.max(maxSum, sum);
    }
    dfs(index + 1, curSum);
    dfs(index + 1, curSum + nums[index]);
  };
  dfs(0, 0);
  return maxSum;
};
