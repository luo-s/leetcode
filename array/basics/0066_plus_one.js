// You are given a large integer represented as an integer array digits,
// where each digits[i] is the ith digit of the integer.
// The digits are ordered from most significant to least significant in
// left-to-right order. The large integer does not contain any leading 0's.
// Increment the large integer by one and return the resulting array of digits.

// https://leetcode.com/problems/plus-one/

// BigInt
// time complexity O(n)
// space complexity O(1)
var plusOne = function (digits) {
  return (BigInt(digits.join("")) + 1n).toString().split("");
};

// basic array manipulation
// time complexity O(n)
// space complexity O(1)
var plusOne = function (digits) {
  let l = digits.length;
  let n = l - 1;
  while (digits[n] == 9) {
    digits[n] = 0;
    n--;
  }
  if (n < 0) {
    digits.unshift(1);
  } else {
    digits[n]++;
  }
  return digits;
};

// another solution
// time complexity O(n)
// space complexity O(1)
var plusOne = function (digits) {
  // find the first not 9 digit, add 1, reassign all 9 digit to 0;
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      digits[i] += 1;
      return digits;
    } else {
      digits[i] = 0;
    }
  }
  // edge case: [9,...,9] => [1,0,...,0]
  digits.unshift(1);
  return digits;
};
