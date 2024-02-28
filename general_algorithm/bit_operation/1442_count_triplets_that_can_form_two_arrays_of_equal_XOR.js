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
// time complexity: O(n^3)
// space complexity: O(1)
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

// if a == b -> a ^ b == arr[i] ^ ... ^ arr[k] == 0
// j cound be any index between (i, k], so count += k - i
// time complexity: O(n^2)
// space complexity: O(1)
var countTriplets = function (arr) {
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    let xor = arr[i];
    for (let k = i + 1; k < arr.length; k++) {
      xor ^= arr[k];
      if (xor === 0) count += k - i;
    }
  }
  return count;
};

// prefix sum function: prefix[i] = arr[0] ^ ... ^ arr[i]
// a ^ b == 0 -> arr[i] ^ ... ^ arr[k] == 0
// -> prefix[k] ^ prefix[i - 1] = 0 -> prefix[k] = prefix[i - 1]
// time complexity: O(n^2)
// space complexity: O(n)
var countTriplets = function (arr) {
  // prefix sum function: prefix[i] = arr[0] ^ ... ^ arr[i]
  let prefix = new Array(arr.length).fill(0);
  arr.forEach((ele, i) => {
    prefix[i] = (prefix[i - 1] || 0) ^ ele;
  });
  let count = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (prefix[k] === (prefix[i - 1] || 0)) count += k - i;
    }
  }
  return count;
};

// hash map + prefix sum
// prefix[k] = prefix[i - 1] -> count += k - i
// for certain k, if there are n pairs [i, k] that makes
// prefix[k] = prefix[i - 1], then count += k - i for each pair
// count += (k - i1) + ... + (k - in) == n * k - (i1 + ... + in)
// time complexity: O(n)
// space complexity: O(n)
var countTriplets = function (arr) {
  let prefixTrack = new Map(),
    total = new Map(),
    count = 0,
    prefix = 0;
  for (const [k, val] of arr.entries()) {
    // update n
    prefixTrack.set(prefix, (prefixTrack.get(prefix) || 0) + 1);
    // update i1 + ... + in
    total.set(prefix, (total.get(prefix) || 0) + k);
    // update prefix sum
    prefix ^= val;
    if (prefixTrack.has(prefix)) {
      count += prefixTrack.get(prefix) * k - total.get(prefix);
    }
  }
  return count;
};
