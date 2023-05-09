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
  let count = 1;
  for (let i = 1; i < nums.length; i++) {
    if (count === 0) {
      candidate = nums[i];
    }
    if (nums[i] === candidate) {
      count++;
    } else {
      count--;
    }
  }
  return candidate;
};

console.log(majorityElement([1, 2, 1, 2, 1]));
console.log(majorityElement([1, 2, 1, 3, 1, 3, 3, 3, 3]));
