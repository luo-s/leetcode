/*
Given an integer array nums, return true if any value appears at least 
twice in the array, and return false if every element is distinct.
*/
// https://leetcode.com/problems/contains-duplicate/description/

// hash table
// time complexity O(n)
// space complexity O(n)
var containsDuplicate = function (nums) {
  let tracker = {};
  for (let num of nums) {
    if (tracker[num] !== undefined) {
      return true;
    } else {
      tracker[num] = 1;
    }
  }
  return false;
};

// Set object (ES6)
var containsDuplicate = function (nums) {
  let set = new Set(nums);
  return nums.length !== set.size;
};

// sorting
// time complexity O(nlogn)
// space complexity O(n)
var containsDuplicate = function (nums) {
  let numsSorted = nums.sort();

  for (let i = 0; i < numsSorted.length - 1; i++) {
    if (numsSorted[i] === numsSorted[i + 1]) return true;
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 1])); // true
console.log(containsDuplicate([1, 2, 3, 4])); // false
