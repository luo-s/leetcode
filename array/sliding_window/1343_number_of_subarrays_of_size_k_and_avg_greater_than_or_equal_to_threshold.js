/*
Given an array of integers arr and two integers k and threshold, return the 
number of sub-arrays of size k and average greater than or equal to threshold.
*/

// sliding window - a better solution
// time complexity O(n)
// space complexity O(n)
var numOfSubarrays = function (arr, k, threshold) {
  let left = 0;
  let right = 0;
  let window_sum = 0;
  let count = 0;
  while (right < arr.length) {
    window_sum += arr[right];
    if (right - left + 1 >= k) {
      if (window_sum >= k * threshold) {
        count++;
      }
      window_sum -= arr[left];
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
