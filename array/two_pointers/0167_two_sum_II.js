/*
Given a 1-indexed array of integers numbers that is already sorted in 
non-decreasing order, find two numbers such that they add up to a specific 
target number. Let these two numbers be numbers[index1] and numbers[index2] 
where 1 <= index1 < index2 <= numbers.length.

Return the indices of the two numbers, index1 and index2, added by one as an 
integer array [index1, index2] of length 2.

numbers is sorted in non-decreasing order.
The tests are generated such that there is exactly one solution. 
You may not use the same element twice.

Your solution must use only constant extra space.
*/
// https://leetcode.com/problems/two-sum-ii-input-array-is-sorted/

// two pointers
// time complexity O(n)
// space complexity O(1)
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;
  while (left < right) {
    if (numbers[left] + numbers[right] < target) {
      left++;
    } else if (numbers[left] + numbers[right] > target) {
      right--;
    } else {
      return [left + 1, right + 1];
    }
  }
};

// hash table
// time complexity O(n)
// space complexity O(n)
var twoSum = function (numbers, target) {
  let checked = {};
  for (let i = 0; i < numbers.length; i++) {
    let number = target - numbers[i];
    if (checked[number] !== undefined) {
      return [checked[number] + 1, i + 1];
    } else {
      checked[numbers[i]] = i;
    }
  }
};
