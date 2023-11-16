/*
Given an integer array nums, in which exactly two elements appear only once and 
all the other elements appear exactly twice. Find the two elements that appear only once. You can return the answer in any order.

You must write an algorithm that runs in linear runtime complexity and uses only 
constant extra space.

2 <= nums.length <= 3 * 10^4
-2^31 <= nums[i] <= 2^31 - 1
Each integer in nums will appear twice, only two integers will appear once.
*/

// https://leetcode.com/problems/single-number-iii/

// hash table
// time complexity O(n)
// space complexity O(n)
var singleNumber = function (nums) {
  let map = new Map();
  for (let num of nums) {
    if (!map.has(num)) map.set(num, 1);
    else map.set(num, map.get(num) + 1);
  }
  let ans = [];
  for (let num of nums) {
    if (map.get(num) === 1) ans.push(num);
  }
  return ans;
};
