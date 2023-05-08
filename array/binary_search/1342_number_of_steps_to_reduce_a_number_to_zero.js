/*
Given an integer num, return the number of steps to reduce it to zero.

In one step, if the current number is even, you have to divide it by 2, 
otherwise, you have to subtract 1 from it.
*/

// binary search
var numberOfSteps = function (num) {
  var count = 0;
  while (num !== 0) {
    if (num % 2 === 0) {
      num /= 2;
    } else if (num % 2 === 1) {
      num -= 1;
    }
    count += 1;
  }
  return count;
};
