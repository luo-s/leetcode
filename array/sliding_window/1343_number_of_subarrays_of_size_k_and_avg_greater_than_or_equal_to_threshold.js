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
    if (right - left + 1 >= k) {
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

// sliding window
// time complexity O(n)
// space complexity O(n)
var numOfSubarrays = function (arr, k, threshold) {
  let left = 0;
  let right = 0;
  let window = [];
  let count = 0;
  while (right <= arr.length) {
    if (window.length < k) {
      window.push(arr[right]);
      right++;
    } else if (window.length > k) {
      window.shift();
      left++;
    } else {
      let avg = window.reduce((a, b) => a + b) / k;
      if (avg >= threshold) {
        count++;
      }
      window.push(arr[right]);
      right++;
    }
  }
  return count;
};

console.log(numOfSubarrays([11, 13, 17, 23, 29, 31, 7, 5, 2, 3], 3, 5));
console.log(numOfSubarrays([2, 2, 2, 2, 5, 5, 5, 8], 3, 4));
