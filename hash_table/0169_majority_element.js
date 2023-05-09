/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

// hash table
// time complexity O(n)
// space complexity O(n)
var majorityElement = function (nums) {
  let tracker = {};
  let majority = [];
  for (let ele of nums) {
    if (tracker[ele] === undefined) {
      tracker[ele] = 1;
    } else {
      tracker[ele]++;
    }
  }
  for (let keys in tracker) {
    if (tracker[keys] > Math.floor(nums.length / 2)) {
      majority.push(keys);
    }
  }
  return majority;
};

//
var majorityElement = function (nums) {};
