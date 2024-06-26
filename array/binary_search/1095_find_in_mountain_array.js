/*
(This problem is an interactive problem.)

You may recall that an array arr is a mountain array if and only if:
arr.length >= 3
There exists some i with 0 < i < arr.length - 1 such that:
arr[0] < arr[1] < ... < arr[i - 1] < arr[i]
arr[i] > arr[i + 1] > ... > arr[arr.length - 1]

Given a mountain array mountainArr, return the minimum index such that mountainArr.get(index) == target. If such an index does not exist, return -1.

You cannot access the mountain array directly. You may only access the array using a MountainArray interface:

MountainArray.get(k) returns the element of the array at index k (0-indexed).
MountainArray.length() returns the length of the array.
Submissions making more than 100 calls to MountainArray.get will be judged Wrong Answer. Also, any solutions that attempt to circumvent the judge will result in disqualification.

3 <= mountain_arr.length() <= 10^4
0 <= target <= 10^9
0 <= mountain_arr.get(index) <= 10^9
*/
// https://leetcode.com/problems/find-in-mountain-array/

// traversal method - time limit exceeded
// time complexity O(n)
// space complexity O(1)
var findInMountainArray = function (target, mountainArr) {
  for (let i = 0; i < mountainArr.legnth(); i++) {
    if (mountainArr.get(i) == target) return i;
  }
  return -1;
};

// divide and conquer

var findInMountainArray = function (target, mountainArr) {
  let left = 0,
    right = mountainArr.length();
  let mid = left + Math.floor((right - left) / 2);
};
