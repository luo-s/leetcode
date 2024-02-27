/*
You are given an array arr of positive integers. 
You are also given the array queries where queries[i] = [lefti, righti].

For each query i compute the XOR of elements from lefti to righti 
(that is, arr[lefti] XOR arr[lefti + 1] XOR ... XOR arr[righti] ).

Return an array answer where answer[i] is the answer to the ith query.
*/

// https://leetcode.com/problems/xor-queries-of-a-subarray/description/

// burte force
var xorQueries = function (arr, queries) {
  let answer = [];
  queries.forEach((queries) => {
    let xor = 0;
    for (let i = queries[0]; i <= queries[1]; i++) {
      xor ^= arr[i];
    }
    answer.push(xor);
  });
  return answer;
};

// prefix sum
// a ^ b ^ c = a ^ (b ^ c); x ^ x = 0; x ^ 0 = x;
var xorQueries = function (arr, queries) {
  let prefix = new Array(arr.length).fill(0);
  arr.forEach((ele, i) => {
    prefix[i] = (prefix[i - 1] || 0) ^ ele;
  });
  let answer = [];
  queries.forEach(([left, right]) => {
    answer.push(prefix[right] ^ (prefix[left - 1] || 0));
  });
  return answer;
};
