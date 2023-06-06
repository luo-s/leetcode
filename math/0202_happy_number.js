/*
Write an algorithm to determine if a number n is happy.

A happy number is a number defined by the following process:

Starting with any positive integer, replace the number by the sum of the 
squares of its digits.
Repeat the process until the number equals 1 (where it will stay), or it 
loops endlessly in a cycle which does not include 1.
Those numbers for which this process ends in 1 are happy.
Return true if n is a happy number, and false if not.
*/

// nested function & recursion
// time complexity O(nlgn)
// space complexity O(n)
var isHappy = function (n) {
  const tracker = {};
  var transform = function (n) {
    let nNew = 0;
    while (n > 0) {
      nNew += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    if (nNew === 1) {
      return true;
    } else if (tracker[nNew] === undefined) {
      tracker[nNew] = nNew;
      return transform(nNew);
    } else {
      return false;
    }
  };
  return transform(n);
};

// nested loop
var isHappy = function (n) {
  const seen = {};
  while (n !== 1 && seen[n] === undefined) {
    seen[n] = n;
    let nNew = 0;
    while (n > 0) {
      nNew += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    n = nNew;
  }
  return n === 1;
};

// Set feature; much faster
var isHappy = function (n) {
  const seen = new Set();
  while (n !== 1 && !seen.has(n)) {
    seen.add(n);
    let nNew = 0;
    while (n > 0) {
      nNew += (n % 10) ** 2;
      n = Math.floor(n / 10);
    }
    n = nNew;
  }
  return n === 1;
};

console.log(isHappy(19)); // true
console.log(isHappy(2)); // false
console.log(isHappy(1111111)); // true
console.log(isHappy(7)); // true
