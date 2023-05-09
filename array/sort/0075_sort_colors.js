/*
Given an array nums with n objects colored red, white, or blue, sort them 
in-place so that objects of the same color are adjacent, with the colors 
in the order red, white, and blue.

We will use the integers 0, 1, and 2 to represent the color red, white, and 
blue, respectively.

You must solve this problem without using the library's sort function.
*/

// merge sort
// time complexity O(nlogn)
// space complexity O(n)
var sortColors = function (nums) {
  var merge = function (left, right) {
    let array = [];
    if (left.length && right.length) {
      if (left[0] < right[0]) {
        array.push(left.shift());
      } else {
        array.push(right.shift());
      }
    }
    return array.concat(left).concat(rihgt);
  };
  let mid = Math.floor(nums.length / 2);
  let left = nums.slice(0, mid);
  let right = nums.slice(mid);
  return merge(sortColors(left), sortColors(right));
};

// quick sort + recursion
// time complexity O(nlogn)
// space complexity O(n)
var sortColors = function (nums) {
  if (nums.length < 2) {
    return nums;
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
    return sortColors(left).concat(pivot).concat(sortColors(right));
  }
};

// insertion sort
// time complexity O(n^2);
// space complexity O(n);
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let temp = nums[i];
    let j = i;
    while (j > 0 && nums[j - 1] > temp) {
      nums[j] = nums[j - 1];
      nums[j - 1] = temp;
      j--;
    }
  }
  return nums;
};

// selection sort
// time compleixty O(n^2)
// space complexity O(1)
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let min = nums[i];
    let minPosition = i;
    for (let j = i; j < nums.length; j++) {
      if (nums[j] < min) {
        min = nums[j];
        minPosition = j;
      }
    }
    if (min !== nums[i]) {
      let temp = nums[i];
      nums[i] = nums[minPosition];
      nums[minPosition] = temp;
    }
  }
  return nums;
};

// bubble sort
// time complexity O(n^2)
// space complexity O(1)
var sortColors = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length - i; j++) {
      if (nums[j] > nums[j + 1]) {
        let temp = nums[j];
        nums[j] = nums[j + 1];
        nums[j + 1] = temp;
      }
    }
  }
  return nums;
};
console.log(sortColors([5, 8, 3, 4, 9, 7, 1]));
