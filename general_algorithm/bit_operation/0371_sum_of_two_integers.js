/*
Given two integers a and b, return the sum of the two integers without 
using the operators + and -.
*/

// https://leetcode.com/problems/sum-of-two-integers/description/

/*
bit operation:
1) 0 + 0 = 0
2) 0 + 1 = 1
3) 1 + 0 = 1
4) 1 + 1 = 0 (left shift 1)
the first 3 rules are the same as XOR operation: a ^ b
the last rule is the same as AND and left shift operation a & b << 1
first calculate the sum without carry, then add the carry (might generate 
new carry, so repeat the process until no carry)  
*/
var getSum = function (a, b) {
  while (b != 0) {
    // get the carry
    let carry = (a & b) << 1;
    // get the sum without carry
    a = a ^ b;
    // update b to carry, and repeat the process
    b = carry;
  }
  return a;
};
