/*
Given an array nums of size n, return the majority element.

The majority element is the element that appears more than ⌊n / 2⌋ times. 
You may assume that the majority element always exists in the array.
*/

// brute force
// time complexity O(n)
// space complexity O(n)
var majorityElement = function (nums) {
  let checked = {};
  for (let num of nums) {
    if (checked[num] !== undefined) {
      checked[num]++;
    } else {
      checked[num] = 1;
    }
    if (checked[num] > nums.length / 2) return num;
  }
};

// the majority element is unique, after sorting nums[mid] return it;
// time complexity O(nlogn)
// space complexity O(n)
var majorityElement = function (nums) {
  var quickSort = function (nums) {
    if (nums.length <= 1) {
      return nums;
    } else {
      let pivot = nums[0];
      let left = [];
      let right = [];
      for (let i = 1; i < nums.length; i++) {
        if (nums[i] < pivot) {
          left.push(nums[i]);
        } else {
          right.push(nums[i]);
        }
      }
      return quickSort(left).concat(pivot).concat(quickSort(right));
    }
  };
  return quickSort(nums)[Math.floor(nums.length / 2)];
};

// Boyer-Moore voting algorithm
// time complexity O(n)
// space complexity O(1)
var majorityElement = function (nums) {
  let candidate = nums[0];
  let vote = 1;
  for (let i = 1; i < nums.length; i++) {
    if (vote === 0) candidate = nums[i];
    if (nums[i] === candidate) {
      vote++;
    } else {
      vote--;
    }
  }
  return candidate;
};

console.log(majorityElement([1, 2, 1, 2, 1]));
console.log(majorityElement([1, 2, 1, 3, 1, 3, 3, 3, 3]));
