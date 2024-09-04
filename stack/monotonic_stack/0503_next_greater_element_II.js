/*
Given a circular integer array nums 
(i.e., the next element of nums[nums.length - 1] is nums[0]), 
return the next greater number for every element in nums.

The next greater number of a number x is the first greater number to its 
traversing-order next in the array, which means you could search circularly 
to find its next greater number. 
If it doesn't exist, return -1 for this number.

1 <= nums.length <= 10^4
-10^9 <= nums[i] <= 10^9
*/

// https://leetcode.com/problems/next-greater-element-ii/

// cannot use hash map because nums is not unique
// technique to solve circular array problems: duplicate the array
// time complexity O(n)
// space complexity O(n)
var nextGreaterElements = function (nums) {
  let l = nums.length;
  nums = nums.concat(nums);
  let ans = new Array(l).fill(-1);
  let stack = [];
  for (let i = 0; i < nums.length; i++) {
    while (stack.length && nums[i] > nums[stack[stack.length - 1]]) {
      let j = stack.pop();
      if (j < l) ans[j] = nums[i];
    }
    stack.push(i);
  }
  return ans;
};
