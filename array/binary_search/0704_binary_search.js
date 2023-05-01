/*
Given an array of integers nums which is sorted in ascending order, 
and an integer target, write a function to search target in nums. 
If target exists, then return its index. Otherwise, return -1.

You must write an algorithm with O(log n) runtime complexity.
*/

var search = function (nums, target) {
  let leftPointer = 0;
  let rightPointer = nums.length - 1;
  while (leftPointer <= rightPointer) {
    let mid = Math.floor((leftPointer + rightPointer) / 2);
    if (nums[mid] > target) {
      rightPointer = mid - 1;
    } else if (nums[mid] < target) {
      leftPointer = mid + 1;
    } else {
      return mid;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9)); //  4
console.log(search([-1, 0, 3, 5, 9, 12], 2)); // -1
