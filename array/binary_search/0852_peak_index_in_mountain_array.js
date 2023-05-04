/*
An array arr a mountain if the following properties hold:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... 
< arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

Constraints:
3 <= arr.length <= 105
0 <= arr[i] <= 106
arr is guaranteed to be a mountain array.

You must solve it in O(log(arr.length)) time complexity.
*/
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > arr[mid + 1]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};
