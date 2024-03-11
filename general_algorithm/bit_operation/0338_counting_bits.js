/*
Given an integer n, return an array ans of length n + 1 such that for each i 
(0 <= i <= n), ans[i] is the number of 1's in the binary representation of i.
*/

// https://leetcode.com/problems/counting-bits/description/

var countBits = function (n) {
  var numberOfBits = function (num) {
    let count = 0;
    while (num > 0) {
      count += num & 1;
      num >>= 1;
    }
    return count;
  };
  let ans = new Array(n + 1).fill(0);
  for (let i = 1; i <= n; i++) {
    ans[i] = numberOfBits(i);
  }
  return ans;
};
