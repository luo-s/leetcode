/*
Given an integer array nums and an integer k, return the kth largest element in 
the array.

Note that it is the kth largest element in the sorted order, not the kth distinct 
element.

Can you solve it without sorting?
*/

// https://leetcode.com/problems/kth-largest-element-in-an-array/

// brute force
// time complexity O(n*k)
// space complexity O(1)
var findKthLargest = function (nums, k) {
  while (k > 1) {
    let max = Math.max(...nums);
    let index = nums.indexOf(max);
    nums[index] = -Infinity;
    k--;
  }
  return Math.max(...nums);
};

// built-in sorting
// time complexity O(nlogn)
// space complexity O(1)
var findKthLargest = function (nums, k) {
  nums.sort((a, b) => b - a);
  return nums[k - 1];
};

// counting sort
// time compleixty O(n)
// space complexity O(n)
var findKthLargest = function (nums, k) {
  let numsMax = Math.max(...nums);
  let numsMin = Math.min(...nums);
  let count = new Array(numsMax - numsMin + 1).fill(0);
  let result = [];
  for (let num of nums) {
    count[num - numsMin]++;
  }
  for (let i = count.length - 1; i >= 0; i--) {
    while (count[i] > 0) {
      result.push(i + numsMin);
      count[i]--;
      if (result.length == k) {
        return result[k - 1];
      }
    }
  }
};

// quick select
// time complexity O(n); worst case O(n^2)
// space complexity O(1)
var findKthLargest = function (nums, k) {
  // run quickSelect algorithm
  quickSelect(nums, 0, nums.length - 1, k);
  return nums[k - 1];
};

var quickSelect = (arr, left, right, k) => {
  // randomize pivot and swap to the end/right
  let rPivot = Math.floor(Math.random() * (right - left + 1)) + left;
  [arr[rPivot], arr[right]] = [arr[right], arr[rPivot]];
  // get the pivot index
  let pivotIndex = partition(arr, left, right);
  let leftLength = pivotIndex - left + 1;
  if (k > leftLength) {
    // kth largest is on the right
    quickSelect(arr, pivotIndex + 1, right, k - leftLength);
  } else if (k < leftLength) {
    // kth largest is on the left
    quickSelect(arr, left, pivotIndex - 1, k);
  } else {
    // kth largest is the pivot
    return;
  }
};

var partition = (arr, left, right) => {
  let pivot = arr[right];
  for (let i = left; i < right; i++) {
    if (arr[i] > pivot) {
      [arr[i], arr[left]] = [arr[left], arr[i]];
      left++;
    }
  }
  // swap pivot to the correct position
  [arr[left], arr[right]] = [arr[right], arr[left]];
  return left;
};
