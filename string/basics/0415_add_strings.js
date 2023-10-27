/*
Given two non-negative integers, num1 and num2 represented as string, 
return the sum of num1 and num2 as a string.

You must solve the problem without using any built-in library for handling 
large integers (such as BigInteger). You must also not convert the inputs 
to integers directly.
*/

// https://leetcode.com/problems/add-strings/

// time complexity O(n)
// space complexity O(n)
var addStrings = function (num1, num2) {
  let p1 = num1.length - 1;
  (p2 = num2.length - 1), (sum = 0);
  let ans = [];
  while (p1 >= 0 || p2 >= 0 || sum != 0) {
    const n1 = p1 >= 0 ? num1.charAt(p1) - "0" : 0; // coersion to number type
    const n2 = p2 >= 0 ? num2.charAt(p2) - "0" : 0;
    const res = n1 + n2 + sum;
    ans.push(res % 10);
    sum = Math.floor(res / 10);
    p1--;
    p2--;
  }
  return ans.reverse().join("");
};

// time complexity O(n)
// space complexity O(n)
var addStrings = function (num1, num2) {
  let n1 = num1.split("").reverse(),
    n2 = num2.split("").reverse();
  let ans = [];
  if (n1.length >= n2.length) {
    for (let i = 0; i < n1.length; i++) {
      let sum =
        n2[i] !== undefined ? Number(n1[i]) + Number(n2[i]) : Number(n1[i]);
      if (sum > 9) {
        ans.push(sum % 10);
        if (i == n1.length - 1) ans.push(1);
        else n1[i + 1]++;
      } else {
        ans.push(sum);
      }
    }
  } else {
    for (let i = 0; i < n2.length; i++) {
      let sum =
        n1[i] !== undefined ? Number(n2[i]) + Number(n1[i]) : Number(n2[i]);
      if (sum > 9) {
        ans.push(sum % 10);
        if (i == n2.length - 1) ans.push(1);
        else n2[i + 1]++;
      } else {
        ans.push(sum);
      }
    }
  }
  return ans.reverse().join("");
};
