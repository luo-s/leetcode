/*
Given an array of integers arr.

We want to select three indices i, j and k where (0 <= i < j <= k < arr.length).

Let's define a and b as follows:

a = arr[i] ^ arr[i + 1] ^ ... ^ arr[j - 1]
b = arr[j] ^ arr[j + 1] ^ ... ^ arr[k]
Note that ^ denotes the bitwise-xor operation.

Return the number of triplets (i, j and k) Where a == b.
*/

// brute force
// 0 <= i < j <= k < arr.length
var countTriplets = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let a = 0;
    for (let j = i + 1; j < arr.length; j++) {
      let b = 0;
      a ^= arr[j - 1];
      for (let k = j; k < arr.length; k++) {
        b ^= arr[k];
        if (a === b) count++;
      }
    }
  }
  return count;
};
