/*
Given an integer array nums and an integer k, return the kth largest element 
in the array.

Note that it is the kth largest element in the sorted order, not the kth 
distinct element.

You must solve it in O(n) time complexity.
*/

// counting sort
// time complexity O(n)
// space complexity O(n)
var findKthLargest = function (nums, k) {
  let numsMin = Math.min(...nums);
  let numsMax = Math.max(...nums);
  let counts = [];
  let result = [];
  for (let i = numsMin; i <= numsMax; i++) {
    counts.push(0);
  }
  for (let num of nums) {
    counts[num - numsMin]++;
  }
  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      result.push(i + numsMin);
      counts[i]--;
    }
  }
  return result[result.length - k];
};

// quick sort
// time complexity O(nlogn)
// space complexity O(n)
var findKthLargest = function (nums, k) {
  var quickSort = function (nums) {
    if (nums.length <= 1) {
      return nums; //base case;
    } else {
      let pivot = nums[0];
      let left = [];
      let right = [];
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
          left.push(nums[i]);
        } else {
          right.push(nums[i]);
        }
      }
      return quickSort(left).concat(pivot).concat(quickSort(right));
    }
  };
  return quickSort(nums)[nums.length - k];
};

// selection sort
// time complexity O(n^2)
// space complexity O(1)
var findKthLargest = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minPosition = 0;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        minPosition = j;
      }
    }
    if (min !== nums[i]) {
      let temp = nums[i];
      nums[i] = min;
      nums[minPosition] = temp;
    }
  }
  return nums[nums.length - k];
};

// bubble sort
// time complexity O(n^2);
// space complexity O(1);
var findKthLargest = function (nums, k) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums[nums.length - k];
};
