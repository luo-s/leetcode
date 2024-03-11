/*
Write a function that takes the binary representation of an unsigned 
integer and returns the number of '1' bits it has 
(also known as the Hamming weight).
*/

// one-liner
var hammingWeight = function (n) {
  return n
    .toString(2)
    .split("")
    .map(Number)
    .reduce((a, c) => a + c);
};
