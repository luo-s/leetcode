/*
Given a sorted array of distinct integers and a target value, return the index 
if the target is found. If not, return the index where it would be if it were 
inserted in order.

You must write an algorithm with O(log n) runtime complexity.
*/
// find the 1st index of element > target;
var searchInsert = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return left;
};

console.log(searchInsert([1, 3, 5, 6], 5)); // 2
console.log(searchInsert([1, 3, 5, 6], 2)); // 1
console.log(searchInsert([1, 3, 5, 6], 7)); // 4
