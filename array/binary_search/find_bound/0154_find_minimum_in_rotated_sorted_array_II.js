/*
Suppose an array of length n sorted in ascending order is rotated between 1 
and n times. For example, the array nums = [0,1,4,4,5,6,7] might become:

[4,5,6,7,0,1,4] if it was rotated 4 times.
[0,1,4,4,5,6,7] if it was rotated 7 times.

Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results 
in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums that may contain duplicates, return the 
minimum element of this array.

nums is sorted and rotated between 1 and n times.

You must decrease the overall operation steps as much as possible.
*/

// https://leetcode.com/problems/find-minimum-in-rotated-sorted-array-ii/
// related: https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/description/
/*
same problem compared to 0153, except nums contains duplicates
*/
var findMin = function (nums) {
  let left = 0,
    right = nums.length - 1;
  // search [0, nums.length - 1], ends when left === right
  while (left < right) {
    let mid = left + Math.floor((right - left) / 2);
    if (nums[mid] < nums[right]) {
      // mid is in the right part
      right = mid;
    } else if (nums[mid] > nums[right]) {
      // mid is in the left part
      left = mid + 1;
    } else if (nums[mid] === nums[right]) {
      // nums contains duplicates, can't decide which part mid is in
      // since mid is the same as right, so we can remove right
      right--;
    }
  }
  return nums[left];
};
