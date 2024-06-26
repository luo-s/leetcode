/*
You are given an array nums consisting of positive integers.

You are also given an integer array queries of size m. For the ith query, 
you want to make all of the elements of nums equal to queries[i]. 
You can perform the following operation on the array any number of times:

Increase or decrease an element of the array by 1.

Return an array answer of size m where answer[i] is the minimum number of 
operations to make all elements of nums equal to queries[i].

Note that after each query the array is reset to its original state.
*/

// https://leetcode.com/problems/minimum-operations-to-make-all-array-elements-equal/description/

// brute force
// time complexity: O(n * m) -- TLE
var minOperations = function (nums, queries) {
  let ans = [];
  for (let query of queries) {
    let count = 0;
    for (let num of nums) {
      count += Math.abs(num - query);
    }
    ans.push(count);
  }
  return ans;
};

// prefix sum + binary search
// time complexity: O(nlogn + mlogn)
var minOperations = function (nums, queries) {
  let n = nums.length,
    m = queries.length,
    preSum = new Array(n + 1).fill(0n),
    ans = new Array(m).fill(0n);
  // sort nums
  nums.sort((a, b) => a - b);
  // calculate prefix sum
  for (let i = 1; i <= n; i++) {
    preSum[i] = preSum[i - 1] + BigInt(nums[i - 1]);
  }
  // loop through queries
  for (let i = 0; i < m; i++) {
    let query = BigInt(queries[i]);
    let left = 0,
      right = n - 1;
    while (left <= right) {
      // find the first element > query or element === query
      let mid = left + Math.floor((right - left) / 2);
      if (nums[mid] < query) {
        left = mid + 1;
      } else if (nums[mid] > query) {
        right = mid - 1;
      } else {
        left = mid;
        break;
      }
    }
    // calculate [nums[left] : nums[n-1]]
    ans[i] += preSum[n] - preSum[left] - query * BigInt(n - left);
    // calculate [nums[0] : nums[left]]
    if (left > 0) ans[i] += query * BigInt(left) - (preSum[left] - preSum[0]);
  }
  return ans.map(Number);
};
