/*
You are given an integer array nums consisting of n elements, and an integer k.

Find a contiguous subarray whose length is equal to k that has the maximum 
average value and return this value. Any answer with a calculation error 
less than 10-5 will be accepted.
*/

// sliding window & two pointers
// time complexity O(n)
// space complexity O(1)
var findMaxAverage = function (nums, k) {
  if (nums.length <= 1) return nums;
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let avgMax = -Infinity;
  while (right < nums.length) {
    windowSum += nums[right];
    if (right - left + 1 >= k) {
      avgMax = Math.max(avgMax, windowSum / k);
      windowSum -= nums[left];
      left++;
    }
    right++;
  }
  return avgMax;
};
