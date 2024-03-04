/*
Given an integer array nums where every element appears three times except for one, 
which appears exactly once. Find the single element and return it.

You must implement a solution with a linear runtime complexity and use only 
constant extra space.

1 <= nums.length <= 3 * 10 ** 4
-2 ** 31 <= nums[i] <= 2 ** 31 - 1
Each element in nums appears exactly three times except for one element which 
appears once.
*/

// https://leetcode.com/problems/single-number-ii/

// consider every bit: 3 x 0s or 3 x 1s, and 1 x 0 or 1 x 1
// thus each bit is (sum of 1s) % 3
// use 2 bits to represent 3 states: 00, 01, 10
// 01 -> 10 -> 00 -> 01
// change state for each 1, not change for 0
// time complexity O(n)
// space complexity O(1)
var singleNumber = function (nums) {
  let ones = 0,
    twos = 0;
  for (let num of nums) {
    // update ones and twos both at the same time
    [ones, twos] = [(ones ^ num) & ~twos, (twos ^ num) & (twos | ones)];
  }
  return ones;
};

var singleNumber = function (nums) {
  let ones = 0,
    twos = 0;
  for (let num of nums) {
    /*
    if (two === 0) {  
      if (n === 0) one = one;   // not change state
      if (n === 1) one = ~one;  // 01 -> 10 or 00 -> 01: toggle one
    }
    if (two === 1) one = 0;   // 10 -> 00 or 10 -> 10; one is always 0
    */
    ones = (ones ^ num) & ~twos; // update ones first
    twos = (twos ^ num) & ~ones;
  }
  return ones;
};

// what if the number appears 5 times?
// each bit is (sum of 1s) % 5
// use 3 bits to represent 5 states
// 000 -> 001 -> 010 -> 011 -> 100 -> 000
