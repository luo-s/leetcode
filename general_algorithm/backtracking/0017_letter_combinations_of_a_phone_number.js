/*
Given a string containing digits from 2-9 inclusive, return all possible letter 
combinations that the number could represent. Return the answer in any order.

A mapping of digits to letters (just like on the telephone buttons) is given below.
Note that 1 does not map to any letters.

0 <= digits.length <= 4
digits[i] is a digit in the range ['2', '9'].
*/

// https://leetcode.com/problems/letter-combinations-of-a-phone-number/

var letterCombinations = function (digits) {
  // use a data structure to store the translation
  let map = new Map();
  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");
  console.log(map);
  let letters = [];
  // get all the possible letters
  for (let digit of digits) {
    letters.push(map.get(digit).split(""));
  }
  letters = letters.flat();
  // calculate a permutation
};

console.log(letterCombinations("23"));
