/*
The array-form of an integer num is an array representing its digits in 
left to right order.

For example, for num = 1321, the array form is [1,3,2,1].
Given num, the array-form of an integer, and an integer k, 
return the array-form of the integer num + k.

1 <= num.length <= 10^4
0 <= num[i] <= 9
num does not contain any leading zeros except for the zero itself.
1 <= k <= 10^4
*/

// https://leetcode.com/problems/add-to-array-form-of-integer/

// time complexity: O(n)
// space complexity: O(n)
var addToArrayForm = function (num, k) {
  let ans = "";
  k = k.toString().split("");
  let i = num.length - 1,
    j = k.length - 1;
  let carry = 0;
  while (i >= 0 || j >= 0 || carry > 0) {
    let sum = carry;
    if (i >= 0) sum += parseInt(num[i--]);
    if (j >= 0) sum += parseInt(k[j--]);
    ans = (sum % 10) + ans;
    carry = Math.floor(sum / 10);
  }
  return ans.split("");
};
