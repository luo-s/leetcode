/*
Given an integer array nums where every element appears three times except for one, 
which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only 
constant extra space.

1 <= nums.length <= 3 * 10^4
-2^31 <= nums[i] <= 2^31 - 1
Each element in nums appears exactly three times except for one element which 
appears once.
*/

// https://leetcode.com/problems/single-number-ii/

// hash table
// time complexity O(n)
// space complexity O(n)
var singleNumber = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (map.has(num)) map.set(num, map.get(num) + 1);
    else map.set(num, 1);
  }
  for (let num of nums) {
    if (map.get(num) === 1) return num;
  }
};
