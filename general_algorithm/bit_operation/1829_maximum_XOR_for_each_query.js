/*
You are given a sorted array nums of n non-negative integers and an integer 
maximumBit. You want to perform the following query n times:

Find a non-negative integer k < 2maximumBit such that 
nums[0] XOR nums[1] XOR ... XOR nums[nums.length-1] XOR k is maximized. 
k is the answer to the ith query.
Remove the last element from the current array nums.
Return an array answer, where answer[i] is the answer to the ith query.

nums.length == n
1 <= n <= 10 ** 5
1 <= maximumBit <= 20
0 <= nums[i] < 2 ** maximumBit
nums​​​ is sorted in ascending order.
*/

// https://leetcode.com/problems/maximum-xor-for-each-query/description/

// brute force  -- time limit exceeded
// time complexity: O(n * (2 ** maximumBit))
// spapce complexity: O(n)
var getMaximumXor = function (nums, maximumBit) {
  let prefix = new Array(nums.length).fill(0);
  nums.forEach((ele, i) => {
    prefix[i] = (prefix[i - 1] || 0) ^ ele;
  });
  let answer = [];
  for (let i = nums.length - 1; i >= 0; i--) {
    let k = Math.pow(2, maximumBit) - 1,
      max = -Infinity;
    index = 0;
    while (k >= 0) {
      if ((k ^ prefix[i]) > max) {
        max = k ^ prefix[i];
        index = k;
      }
      k--;
    }
    answer.push(index);
  }
  return answer;
};

// bit manipulation
// for each query: maxmize prefix[i] ^ k, where 0 <= k < 2 ** maximumBit
// 0 <= nums[i] < 2 ** maximumBit -> 0 <= prefix[i] < 2 ** maximumBit
// thus the max value of prefix[i] ^ k is 2 ** maximumBit - 1
// k = (2 ** maximumBit - 1) ^ prefix[i]
// time complexity: O(n)
// space complexity: O(n)
var getMaximumXor = function (nums, maximumBit) {
  let prefix = new Array(nums.length).fill(0);
  nums.forEach((ele, i) => {
    prefix[i] = (prefix[i - 1] || 0) ^ ele;
  });
  let answer = [],
    max = Math.pow(2, maximumBit) - 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    const index = max ^ prefix[i];
    answer.push(index);
  }
  return answer;
};

// optimized bit manipulation
// time complexity: O(n)
// space complexity: O(n)
var getMaximumXor = function (nums, maximumBit) {
  let max = 2 ** maximumBit - 1,
    xorSum = 0;
  result = new Array(nums.length);
  for (let i = 0; i < nums.length; i++) {
    xorSum ^= nums[i];
    result[nums.length - 1 - i] = max ^ xorSum;
  }
  return result;
};

// optimized bit manipulation
var getMaximumXor = function (nums, maximumBit) {
  let max = (1 << maximumBit) - 1;
  // loop through the nums array
  for (let i = 0; i < nums.length; i++) {
    // update the max value
    max ^= nums[i];
    // the current max if the (nums.length - 1 - i)th query
    nums[i] = max;
  }
  return nums.reverse();
};
