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

// divide and conquer, recursion
var myPow = function (x, n) {
  // base cases
  if (n === 0) return 1;
  if (n === 1) return x;
  if (n < 0) return myPow(1 / x, -n);
  // recursive cases
  return n % 2 ? x * myPow(x * x, Math.floor(n / 2)) : myPow(x * x, n / 2);
};

// divide and conquer + Bitwise operation
var myPow = function (x, n) {
  if (n < 0) {
    x = 1 / x;
    n = -n;
  }
  let ans = 1;
  let curr = x;
  while (n > 0) {
    if (n & 1) ans *= curr; // get the least significant bit of n
    curr *= curr;
    n >>>= 1; // unsigned right shift n (n > 0)
  }
  return ans;
};

/* line 54, why cannot use signed right shift (n >>= 1)?
  2147483648 is 0b10000000 00000000 00000000 00000000 (max 32-bit number)
  2147483648 >> 1 =>  0b11000000 00000000 00000000 00000000 == -1073741824
  2147483648 >>> 1 => 0b01000000 00000000 00000000 00000000 ==  1073741824
*/
