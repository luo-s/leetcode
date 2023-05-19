/*
Given an integer array nums, find the subarray with the largest sum, and 
return its sum.
*/
// brute force
// time complexity O(n^2)
// space complexity O(1)
function maxSubArray(nums) {
  if (nums.length <= 1) return nums[0];
  let sumMax = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    let sum = 0;
    for (let j = i; j < nums.length; j++) {
      sum += nums[j];
      sumMax = Math.max(sumMax, sum);
    }
  }
  return sumMax;
}

// time complexity O(n)
// space commplexity O(1)
function maxSubArray(nums) {
  let overallMax = nums[0];
  let currentMax = nums[0];
  for (let i = 1; i < nums.length; i++) {
    currentMax = Math.max(nums[i], nums[i] + currentMax);
    overallMax = Math.max(currentMax, overallMax);
  }
  return overallMax;
}

// one pointer
// time complexity O(n)
// space complexity O(1)
function maxSubArray(nums) {
  let pointer = 0;
  let maxSum = -Infinity;
  let currentSum = 0;
  while (pointer < nums.length) {
    currentSum += nums[pointer];
    maxSum = Math.max(currentSum, maxSum);
    if (currentSum < 0) {
      currentSum = 0;
    }
    pointer++;
  }
  return maxSum;
}
