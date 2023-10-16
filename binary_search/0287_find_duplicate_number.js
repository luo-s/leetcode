/*
Given an array of integers nums containing n + 1 integers where each integer 
is in the range [1, n] inclusive.

There is only one repeated number in nums, return this repeated number.

You must solve the problem without modifying the array nums and uses only 
constant extra space.

nums.length == n + 1
All the integers in nums appear only once except for precisely one integer 
which appears two or more times.
*/

// https://leetcode.com/problems/find-the-duplicate-number/

// hash table + Set/ES6
// time complexity O(n)
// space xomplexity O(n)
var findDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) {
      return num;
    } else {
      set.add(num);
    }
  }
};

// binary search: man-make an sorted array with a pivot point:
// [1, target-1] => count(i) <= i; [target, n] => count(i) > i ;
// time complexity O(nlogn)
// space xomplexity O(1)
var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length - 1;
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }
    if (count <= mid) {
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return left;
};

// Two pointers: Floyd Cycle Detection Algorithm/Tortoise and Hare Algorithm
// time complexity O(n)
// space xomplexity O(1)
