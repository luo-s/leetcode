/*
Write a function that takes the binary representation of an unsigned 
integer and returns the number of '1' bits it has 
(also known as the Hamming weight).

The input must be a binary string of length 32.
*/

// one-liner
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .map(Number)
    .reduce((a, c) => a + c);
};

var hammingWeight = function (n) {
  let count = 0;
  while (n) {
    count += n & 1;
    // n is an unsigned integer, so we can use >>> instead of >>
    n >>>= 1;
  }
  return count;
};
