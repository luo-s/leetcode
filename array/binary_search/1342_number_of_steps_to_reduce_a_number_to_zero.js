/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, 
otherwise, you have to subtract 1 from it.
*/

// https://leetcode.com/problems/number-of-steps-to-reduce-a-number-to-zero/

// time complexity O(logn)
// space complexity O(1)
var numberOfSteps = function (num) {
  var count = 0;
  while (num !== 0) {
    num = num % 2 ? num - 1 : num / 2;
    count += 1;
  }
  return count;
};
