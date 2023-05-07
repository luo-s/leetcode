/*
Given an integer array nums sorted in non-decreasing order, remove the 
duplicates in-place such that each unique element appears only once. 
The relative order of the elements should be kept the same. 
Then return the number of unique elements in nums.

Consider the number of unique elements of nums to be k, to get accepted, 
you need to do the following things:

Change the array nums such that the first k elements of nums contain the unique elements in the order they were present in nums initially. The remaining elements of nums are not important as well as the size of nums.
Return k.
*/

// two pointer
// time complexity O(n)
// space complexity O(1)
var removeDuplicates = function (nums) {
  let slow = 0;
  let fast = 1;
  while (fast < nums.length) {
    if (nums[fast] !== nums[slow]) {
      slow++;
      nums[slow] = nums[fast];
    }
    fast++;
  }
  return slow + 1;
};

// brute force: only works when nums[i] >= 0 -- Object key order issue
var removeDuplicates = function (nums) {
  let tracker = {};
  for (let ele of nums) {
    if (tracker[ele] === undefined) {
      tracker[ele] = 1;
    } else {
      tracker[ele]++;
    }
  }
  for (let i = Object.keys(tracker).length - 1; i >= 0; i--) {
    nums.unshift(Number(Object.keys(tracker)[i]));
    nums.pop();
  }
  return Object.keys(tracker).length;
};
