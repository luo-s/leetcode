/*
Given an integer n, return the least number of perfect square numbers that 
sum to n.

A perfect square is an integer that is the square of an integer; 
in other words, it is the product of some integer with itself. 
For example, 1, 4, 9, and 16 are perfect squares while 3 and 11 are not.

1 <= n <= 10^4
*/

// https://leetcode.com/problems/perfect-squares/description/

/*
brute force: time limit exceeded
Lagrange's four-square theorem:
1) every natural number can be represented as the sum of 4 integer squares.
2) if n = 4^a * (8b + 7), then n can only be represented as the sum of 4 integer squares.

*/
// time complexity O(sqrt(n))
// space complexity O(1)
var numSquares = function (n) {
  // check if n is a perfect square O(1)
  var isPerfectSquare = function (num) {
    let sqrt = Math.floor(Math.sqrt(num));
    return sqrt * sqrt === num;
  };
  // check if n can only be represented as the sum of 4 integer squares O(logn)
  var isFourSquare = function (num) {
    while (num % 4 === 0) num /= 4;
    return num % 8 === 7;
  };
  if (isPerfectSquare(n)) return 1;
  if (isFourSquare(n)) return 4;
  // check other cases (2 or 3) O(sqrt(n))
  for (let i = 1; i * i <= n; i++) {
    let secondPart = n - i * i;
    if (isPerfectSquare(secondPart)) return 2;
  }
  return 3;
};

/*
complete knapsack problem:
given a set of perfect squares, find the least element subset that sums is n
let dp[w] be the least number of perfect squares that sum to w
dp[w] = min(dp[w], dp[w - perfectSquares[i]] + 1)
*/
// time complexity O(n * sqrt(n))
// space complexity O(n)
var numSquares = function (n) {
  // get the array of perfect squares
  let perfectSquares = [];
  for (let i = 1; i * i <= n; i++) {
    perfectSquares.push(i * i);
    // if n is a perfect square, return 1
    if (i * i === n) return 1;
  }
  let dp = new Array(n + 1).fill(Infinity);
  // initialization: 0 perfect squares sum to 0
  dp[0] = 0;
  for (let i = 0; i < perfectSquares.length; i++) {
    for (let w = perfectSquares[i]; w <= n; w++) {
      dp[w] = Math.min(dp[w], dp[w - perfectSquares[i]] + 1);
    }
  }
  return dp[n];
};
