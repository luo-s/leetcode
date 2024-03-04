/*
You are given an integer array nums. You want to maximize the number of 
points you get by performing the following operation any number of times:
1) Pick any nums[i] and delete it to earn nums[i] points. 
2) Afterwards, you must delete EVERY element equal to nums[i] - 1 and 
EVERY element equal to nums[i] + 1.

Return the maximum number of points you can earn by applying the above 
operation some number of times.

1 <= nums.length <= 2 * 10^4
1 <= nums[i] <= 10^4
*/

// https://leetcode.com/problems/delete-and-earn/description/
// related https://leetcode.com/problems/house-robber-ii/description/

// constrcut a new array to store the sum of the same number, then the
// same as house robber problem
var deleteAndEarn = function (nums) {
  let max = Math.max(...nums),
    min = Math.min(...nums),
    array = new Array(max - min + 1).fill(0);
  for (let num of nums) {
    array[num - min] += num;
  }
  if (array.length === 1) return array[0];
  let dp = new Array(array.length).fill(0);
  dp[0] = array[0];
  dp[1] = Math.max(array[0], array[1]);
  for (let i = 2; i < array.length; i++) {
    dp[i] = Math.max(dp[i - 1], dp[i - 2] + array[i]);
  }
  return dp[array.length - 1];
};
