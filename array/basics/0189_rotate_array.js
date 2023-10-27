// Given an integer array nums, rotate the array to the right by k steps,
// where k is non-negative.

//https://leetcode.com/problems/rotate-array/

// time complexity O(n)
// space complexity O(n)
var rotate = function (nums, k) {
  let l = nums.length;
  let step = k % l;
  let numsCopy = nums.slice();
  for (let i = 0; i < l; i++) {
    if (i < step) {
      nums[i] = numsCopy[i - step + l]; // manage index overflow
    } else {
      nums[i] = numsCopy[i - step];
    }
  }
  return nums;
};

// slice and assemble
// time complexity O(n)
// space complexity O(n)
var rotate = function (nums, k) {
  let l = nums.length;
  let step = k % l;
  let arr1 = nums.slice(0, l - step);
  let arr2 = nums.slice(-step);
  // nums -> arr2.concat(arr1);
  for (let i = 0; i < l; i++) {
    if (i < arr2.length) {
      nums[i] = arr2[i];
    } else {
      nums[i] = arr1[i - arr2.length];
    }
  }
  return nums;
};

// rotate 3 times
// time complexity O(n)
// space complexity O(1)
var rotate = function (nums, k) {
  var reverse = function (nums, start, end) {
    while (start < end) {
      const temp = nums[start];
      nums[start] = nums[end];
      nums[end] = temp;
      start++;
      end--;
    }
  };
  let l = nums.length;
  k %= l;
  reverse(nums, 0, l - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, l - 1);
};

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3)); //[5,6,7,1,2,3,4]
console.log(rotate([-1, -100, 3, 99], 2)); //[3,99,-1,-100]
