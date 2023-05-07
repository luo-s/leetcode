/* 
Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
*/

// https://leetcode.com/problems/powx-n/

// recursion -- error: max call stack size exceeded
var myPow = function (x, n) {
  if (n > 0) {
    return x * myPow(x, n - 1);
  } else if (n < 0) {
    return (1 / x) * myPow(x, n + 1);
  } else {
    return 1;
  }
};

// tranditional method O(n) -- error: time limit exceeded
var myPow = function (x, n) {
  let power = 1;
  let i = 1;
  while (i <= Math.abs(n)) {
    if (n > 0) {
      power *= x;
    } else if (n < 0) {
      power /= x;
    }
    i++;
  }
  return power;
};

// binary search, divide and conquer, recursion
var myPow = function (x, n) {
  if (n === 0) {
    return 1;
  } else if (Math.abs(n) % 2 === 0) {
    let y = myPow(x, n / 2);
    return y * y;
  } else if (Math.abs(n) % 2 === 1) {
    if (n > 0) {
      let y = myPow(x, Math.floor(n / 2));
      return y * y * x;
    } else if (n < 0) {
      let y = myPow(x, Math.ceil(n / 2));
      return (y * y) / x;
    }
  }
};

// binary search, divide and conquer, without recursion, Bitwise operation
var myPow = function (x, n) {};
