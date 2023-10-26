/*
Given an unsorted integer array nums, return the smallest missing positive integer.

You must implement an algorithm that runs in O(n) time and uses O(1) 
auxiliary space.
*/

// make a hash table based on nums array to satisfy space complexity O(1)
// time complexity O(n)
// space complexity O(1)
var firstMissingPositive = function (nums) {
  let l = nums.length;
  for (let i = 0; i < l; i++) {
    if (nums[i] <= 0) nums[i] = l + 1;
  }
  for (let i = 0; i < l; i++) {
    let num = Math.abs(nums[i]);
    if (num <= l) {
      nums[num - 1] = -Math.abs(nums[num - 1]);
    }
  }
  for (let i = 0; i < l; i++) {
    if (nums[i] > 0) return i + 1;
  }
  return l + 1;
};

// array manipulation
// time complexity O(nlogn)
// space complexity O(n)
var firstMissingPositive = function (nums) {
  let array = Array.from(
    new Set(nums.filter((ele) => ele > 0).sort((a, b) => a - b))
  );
  let i = 0;
  while (array[i] == i + 1) {
    i++;
  }
  return i + 1;
};

// hash table
// time complexity O(n)
// space compelxity O(n)
var firstMissingPositive = function (nums) {
  let dict = {};
  for (let num of nums) {
    if (num > 0 && dict[num] == undefined) {
      dict[num] = 1;
    }
  }
  console.log(dict);
  let length = Object.keys(dict).length;
  for (let i = 0; i < length; i++) {
    if (dict[i + 1] == undefined) return i + 1;
  }
  return length + 1;
};
