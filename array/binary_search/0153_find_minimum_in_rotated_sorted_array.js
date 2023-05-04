/*
Suppose an array of length n sorted in ascending order is rotated between 
1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum 
element of this array.

You must write an algorithm that runs in O(log n) time.
*/
// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

// better version
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return nums[left];
};

// first solution
var findMin = function (nums) {
  // handle edge cases: empty array & single element array
  if (nums.length <= 1) {
    return nums[0];
  }
  // edge case: ordered array
  if (nums[0] < nums[nums.length - 1]) {
    return nums[0];
  }
  // two pointer binary search
  let left = 0;
  let right = nums.length - 1;

  while (left < right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] >= nums[0]) {
      // nums[mid] == nums[0]: 2 elements sorted array;
      left = mid + 1;
    } else {
      right = mid;
    }
  }
  return nums[left];
};

console.log(findMin([3, 4, 5, 1, 2])); // 1
console.log(findMin([4, 5, 6, 7, 0, 1, 2])); // 0
console.log(findMin([11, 13, 15, 17, 9])); // 9
console.log(findMin([1, 2])); // 1
console.log(findMin([2, 1])); // 1
