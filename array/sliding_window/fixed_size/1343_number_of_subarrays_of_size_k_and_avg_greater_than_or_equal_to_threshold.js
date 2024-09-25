/*
Given an array of integers arr and two integers k and threshold, return the 
number of sub-arrays of size k and average greater than or equal to threshold.
*/

// sliding window - a better solution
// time complexity O(n)
// space complexity O(1)
var numOfSubarrays = function (arr, k, threshold) {
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let count = 0;
  while (right < arr.length) {
    windowSum += arr[right];
    if (right - left + 1 == k) {
      if (windowSum >= k * threshold) {
        count++;
      }
      windowSum -= arr[left];
      left++;
    }
    right++;
  }
  return count;
};
