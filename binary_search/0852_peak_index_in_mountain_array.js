/*
An array arr a mountain if the following properties hold:
arr.length >= 3 
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i] 
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]
Given a mountain array arr, return the index i such that arr[0] < arr[1] < ... 
< arr[i - 1] < arr[i] > arr[i + 1] > ... > arr[arr.length - 1].

arr is guaranteed to be a mountain array.

You must solve it in O(log(arr.length)) time complexity.
*/
// https://leetcode.com/problems/peak-index-in-a-mountain-array/

// time complexity O(logn)
// space complexity O(1)
var peakIndexInMountainArray = function (arr) {
  // since arr.legnth >= 3, thus 0 < target < arr.length - 1
  let left = 1;
  let right = arr.length - 1;
  // search [1, arr.length - 1)
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (arr[mid] > arr[mid - 1]) left = mid;
    if (arr[mid] > arr[mid + 1]) right = mid;
  }
  return left;
};
