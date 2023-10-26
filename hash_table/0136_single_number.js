/*
Given a non-empty array of integers nums, every element appears twice except for 
one. Find that single one.

You must implement a solution with a linear runtime complexity and use only 
constant extra space.
*/

// https://leetcode.com/problems/single-number/

// XOR : x ^ 0 = x; x ^ x = 0; (a^b)^c = a^(b^c)
// time complexity O(n)
// space complexity O(1)
var singleNumber = function (nums) {
  let ans = 0;
  for (let num of nums) {
    ans ^= num;
  }
  return ans;
};

// hash table
// time complexity O(n)
// space complexity O(n)
var singleNumber = function (nums) {
  let dict = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (dict.has(nums[i])) {
      dict.delete(nums[i]);
    } else {
      dict.set(nums[i], 1);
    }
  }
  return dict.keys().next().value;
};

// sorting
// time complexity O(nlogn)
// space complexity O(1)
var singleNumber = function (nums) {
  nums.sort((a, b) => a - b);
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] !== nums[i + 1] && nums[i] !== nums[i - 1]) return nums[i];
  }
};
