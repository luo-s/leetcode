/*
Given two positive integers num1 and num2, find the positive integer x such that:

x has the same number of set bits as num2, and
The value x XOR num1 is minimal.
Note that XOR is the bitwise XOR operation.

Return the integer x. The test cases are generated such that x is uniquely determined.

The number of set bits of an integer is the number of 1's in its binary representation.
1 <= num1, num2 <= 10 ** 9
*/

// https://leetcode.com/problems/minimize-xor/description/

// brute force
// find the number of set bits in num1 and num2
// if bits2 = bits1, return num1 (num1 ^ num1 = 0)
// if bits2 < bits1, toggle the 1s in num1 from the least significant bit
// if bits2 > bits1, toggle all the 1s in num1 to 0 and then toggle the 0s
// in num1 from the least significant bit
var minimizeXor = function (num1, num2) {
  var binary = function (num) {
    let array = new Array(32).fill(0);
    let i = 31;
    while (num > 0) {
      array[i--] = num % 2;
      num = Math.floor(num / 2);
    }
    return array;
  };
  let b1 = binary(num1),
    b2 = binary(num2),
    bits1 = b1.reduce((acc, cur) => acc + cur, 0),
    bits2 = b2.reduce((acc, cur) => acc + cur, 0);
  if (bits2 < bits1) {
    // not enough set bits in num2; toggle (bits1 - bits2) 1s in num1
    // start from the least significant bit
    for (let i = b1.length - 1; i >= 0; i--) {
      if (b1[i] === 1) {
        if (bits1 > bits2) {
          b1[i] = 0;
          bits1--;
        }
      }
    }
  } else if (bits2 > bits1) {
    // too many set bits in num2; toggle (bits2 - bits1) 0s in num1
    // from the least significant bit
    for (let i = b1.length - 1; i >= 0; i--) {
      if (b1[i] === 0) {
        if (bits2 > bits1) {
          b1[i] = 1;
          bits2--;
        }
      }
    }
  } else return num1;
  return b1
    .map((ele, index) => ele * 2 ** (31 - index))
    .reduce((acc, cur) => acc + cur, 0);
};

// bit manipulation
var minimizeXor = function (num1, num2) {
  var countBits = function (num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num = num >> 1;
    }
    return count;
  };
  let bits1 = countBits(num1),
    bits2 = countBits(num2);
  // toggle the 1s in num1 from the least significant bit
  for (; bits2 < bits1; bits2++) {
    num1 &= num1 - 1;
  }
  // toggle the 0s in num1 from the least significant bit
  for (; bits2 > bits1; bits2--) {
    num1 |= num1 + 1;
  }
  return num1;
};
