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
// Related: https://leetcode.com/problems/search-insert-position/

// hash table + Set/ES6
// time complexity O(n)
// space complexity O(n)
var findDuplicate = function (nums) {
  let set = new Set();
  for (let num of nums) {
    if (set.has(num)) return num;
    else set.add(num);
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

/* binary search -- make an sorted array with a pivot point:
let count(i) be the number of elements in the array which are less than or
equal to i. If there are no duplicates, then count(i) === i.
Since there is a duplicate, let's say the duplicate number is target, then
1) [1, target-1] => count(i) <= i; 
2) [target, n] => count(i) > i ;

Note: binary search [1, n] instead of [nums[0], nums[nums.length-1]]

time complexity O(nlogn)
space complexity O(1)
*/
var findDuplicate = function (nums) {
  // nums.length = n + 1 -> n = nums.length - 1
  let left = 1;
  let right = nums.length - 1;
  // search [1, n]
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    let count = 0;
    // counstruct the binary search variable
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] <= mid) count++;
    }
    if (count <= mid) {
      // mid is in [1, target-1] -> search [mid + 1, right]
      left = mid + 1;
    } else if (count > mid) {
      // mid is in [target, n] -> search [target, mid]
      right = mid;
    }
  }
  return left;
};
// Floyd Cycle Detection Algorithm
// time complexity O(n)
// space complexity O(1)
var findDuplicate = function (nums) {};
