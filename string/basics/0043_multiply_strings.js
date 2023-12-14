/*
Given two non-negative integers num1 and num2 represented as strings, return the 
product of num1 and num2, also represented as a string.

Note: You must not use any built-in BigInteger library or convert the inputs to 
integer directly.
*/

// https://leetcode.com/problems/multiply-strings/

var multiply = function (num1, num2) {};

// brute force -- integer overflow
var multiply = function (num1, num2) {
  let arr1 = num1.split("");
  let arr2 = num2.split("");
  for (let i = 0; i < num1.length; i++) {
    arr1[i] *= Math.pow(10, num1.length - 1 - i);
  }
  for (let i = 0; i < num2.length; i++) {
    arr2[i] *= Math.pow(10, num2.length - 1 - i);
  }
  let res = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      res += arr1[i] * arr2[j];
    }
  }
  return res.toString();
};
