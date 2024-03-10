/*
An integer has monotone increasing digits if and only if each pair of 
adjacent digits x and y satisfy x <= y.

Given an integer n, return the largest number that is less than or equal to 
n with monotone increasing digits.
*/

// https://leetcode.com/problems/monotone-increasing-digits/description/

/*
get the digits of n: n1, n2, n3, ...
find the first decreasing digit: i e.g. 3 in 1232
decrease n[i - 1] by 1, and set all the following digits to 9
*/
var monotoneIncreasingDigits = function (n) {
  // convert n to array of digits
  let digits = n
    .toString()
    .split("")
    .map((ele) => parseInt(ele));
  // initialize pointer to -1
  let pointer = -1;
  // loop through the digits from right to left
  for (let i = digits.length - 1; i >= 1; i--) {
    // if not monotone increasing, decrease digits[i - 1]; update pointer
    if (digits[i - 1] > digits[i]) {
      digits[i - 1]--;
      pointer = i - 1;
    }
  }
  // set all the following digits to 9
  if (pointer >= 0) digits.fill(9, pointer + 1);
  return parseInt(digits.join(""));
};
