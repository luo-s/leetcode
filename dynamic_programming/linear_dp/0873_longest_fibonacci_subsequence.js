/*
A sequence x1, x2, ..., xn is Fibonacci-like if:

n >= 3
xi + xi+1 == xi+2 for all i + 2 <= n

Given a strictly increasing array arr of positive integers forming a 
sequence, return the length of the longest Fibonacci-like subsequence 
of arr. If one does not exist, return 0.

A subsequence is derived from another sequence arr by deleting any number 
of elements (including none) from arr, without changing the order of the 
remaining elements. 

For example, [3, 5, 8] is a subsequence of [3, 4, 5, 6, 7, 8].

3 <= arr.length <= 1000
1 <= arr[i] < arr[i + 1] <= 10^9
*/

// dynamic programming
// dp[j][k] is the length of the longest fib subsequence ending with
// [arr[j], arr[k]] that dp[j][k] = max(dp[j][k], dp[i][j] + 1)
// for every i, j, k that 0 <= i < j < k; if arr[i] + arr[j] == arr[k]
var lenLongestFibSubseq = function (arr) {
  let dp = new Array(arr.length)
    .fill("placeholder")
    .map(() => new Array(arr.length).fill(2));
  for (let k = 2; k < arr.length; k++) {
    for (let j = k - 1; j > 0; j--) {
      for (let i = j - 1; i >= 0; i--) {
        if (arr[i] + arr[j] === arr[k]) {
          dp[j][k] = Math.max(dp[j][k], dp[i][j] + 1);
        }
      }
    }
  }
  return Math.max(...dp.map((row) => Math.max(...row)));
};
