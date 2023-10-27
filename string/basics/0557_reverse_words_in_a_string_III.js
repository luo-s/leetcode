/*
Given a string s, reverse the order of characters in each word within a 
sentence while still preserving whitespace and initial word order.
*/

// higher order function
var reverseWords = function (s) {
  return s
    .split(" ")
    .map((e) => e.split("").reverse().join(""))
    .join(" ");
};

// time complexity O(n)
// space complexity O(n)
var reverseWords = function (s) {
  function reverse(str) {
    let a = str.split("");
    let left = 0,
      right = a.length - 1;
    while (left < right) {
      let temp = a[left];
      a[left] = a[right];
      a[right] = temp;
      left++;
      right--;
    }
    return a.join("");
  }
  let words = s.split(" ");
  let ans = [];
  for (let word of words) {
    ans.push(reverse(word));
  }
  return ans.join(" ");
};
