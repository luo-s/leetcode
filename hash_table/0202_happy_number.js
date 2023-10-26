/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the squares 
of its digits.
Repeat the process until the number equals 1 (where it will stay), or it loops 
endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

// hash table
// time complexity O(logn)
// space complexity O(logn)
var isHappy = function (n) {
  // function time complexity O(logn)
  function digitSquareSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += (num % 10) ** 2;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  let dict = {};
  // time complexity O(logn + loglogn + ...)
  while (n !== 1) {
    if (!dict[n]) dict[n] = true;
    else return false;
    n = digitSquareSum(n);
  }
  return true;
};

// optimized: fast and slow pointers
// time complexity O(logn)
// space complexity O(1)
var isHappy = function (n) {
  function digitSquareSum(num) {
    let sum = 0;
    while (num > 0) {
      sum += (num % 10) ** 2;
      num = Math.floor(num / 10);
    }
    return sum;
  }
  let slow = n,
    fast = n;
  do {
    slow = digitSquareSum(slow);
    fast = digitSquareSum(fast);
    fast = digitSquareSum(fast);
  } while (slow != fast);
  return slow == 1;
};
