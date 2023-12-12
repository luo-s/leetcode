/*
Given an integer n, return the nth digit of the infinite integer sequence [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, ...].
1 <= n <= 2^31 - 1
*/
// https://leetcode.com/problems/nth-digit/

/*
1 - 9 => 9 * 1
10 - 99 => 90 * 2
100 - 999 => 900 * 3
...
*/

// best solution
// time complexity O(log10n)
// space compleixty O(1)
var findNthDigit = function (n) {
  var digit = 1,
    start = 1,
    count = 9;
  // find out how many digits the target number has
  while (n > count) {
    n -= count;
    start *= 10;
    digit++;
    count = 9 * start * digit;
  }
  // find out the target number
  var num = start + Math.floor((n - 1) / digit);
  var s = num.toString();
  // find out the digit
  return parseInt(s[(n - 1) % digit]);
};
