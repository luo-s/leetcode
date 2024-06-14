/* 
Implement pow(x, n), which calculates x raised to the power n (i.e., x^n).
*/

// https://leetcode.com/problems/powx-n/

// recursion -- error: max call stack size exceeded
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n > 0) return x * myPow(x, n - 1);
};

// tranditional method O(n) -- error: time limit exceeded
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  let res = 1;
  for (let i = 0; i < n; i++) {
    res *= x;
  }
  return res;
};

// divide and conquer, recursion
var myPow = function (x, n) {
  if (n === 0) return 1;
  if (n < 0) return 1 / myPow(x, -n);
  if (n % 2 === 0) {
    return myPow(x * x, n / 2);
  } else {
    return x * myPow(x, n - 1);
  }
};
