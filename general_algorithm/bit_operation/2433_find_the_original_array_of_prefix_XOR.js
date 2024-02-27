/*
You are given an integer array pref of size n. 
Find and return the array arr of size n that satisfies:

pref[i] = arr[0] ^ arr[1] ^ ... ^ arr[i].
Note that ^ denotes the bitwise-xor operation.

It can be proven that the answer is unique.
*/

// https://leetcode.com/problems/find-the-original-array-of-prefix-xor/description/

// pref[i] == pref[i-1] ^ res[i]
// res[i] == pref[i] ^ p[i-1]
var findArray = function (pref) {
  let res = [pref[0]];
  for (let i = 1; i < pref.length; i++) {
    res.push(pref[i] ^ pref[i - 1]);
  }
  return res;
};
