/*
Given two non-negative integers num1 and num2 represented as strings, return the 
product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to 
integer directly.
*/

// https://leetcode.com/problems/multiply-strings/

// multiply simulation
var multiply = function (num1, num2) {
  if (num1 === "0" || num2 === "0") return "0";
  const l1 = num1.length,
    l2 = num2.length,
    res = new Array(l1 + l2).fill(0);

  for (let i = l1 - 1; i >= 0; i--) {
    for (let j = l2 - 1; j >= 0; j--) {
      const p1 = i + j,
        p2 = i + j + 1;
      let sum = res[p2] + Number(num1[i]) * Number(num2[j]);
      res[p2] = sum % 10;
      res[p1] += Math.floor(sum / 10);
    }
  }
  if (res[0] === 0) res.shift();
  return res.join("");
};
