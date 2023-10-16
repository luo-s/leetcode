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

// counting array
// time complexity O(n)
// space complexity O(n)
var findDuplicate = function (nums) {
  let cnt = new Array(nums.length).fill(0);
  for (let num of nums) {
    cnt[num]++;
    if (cnt[num] > 1) {
      return num;
    }
  }
};

// binary search -- make an sorted array with a pivot point:
// [1, target-1] => count(i) <= i; [target, n] => count(i) > i ;
// time complexity O(nlogn)
// space xomplexity O(1)
var findDuplicate = function (nums) {
  let left = 1;
  let right = nums.length - 1;
  while (left < right) {
    let mid = (left + right) >> 1;
    let count = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }
    if (count <= mid) {
      // mid belongs to [1, target-1] -> mid < target
      left = mid + 1;
    } else {
      // mid belongs to [target, n] -> mid >= target
      right = mid;
    }
  }
  return left;
};

// Two pointers: Floyd Cycle Detection Algorithm/Tortoise and Hare Algorithm
// time complexity O(n)
// space xomplexity O(1)
