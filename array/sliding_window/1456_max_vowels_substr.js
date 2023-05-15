/*
Given a string s and an integer k, return the maximum number of vowel 
letters in any substring of s with length k.

Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.
s consists of lowercase English letters.
1 <= k <= s.length
*/

// sliding window -- array method
// time complexity O(n)
// space complexity O(n)
var maxVowels = function (s, k) {
  let arr = s.split("");
  const vowels = "aeuio";
  for (let i = 0; i < arr.length; i++) {
    if (vowels.includes(arr[i])) {
      arr[i] = 1;
    } else {
      arr[i] = 0;
    }
  }
  let left = 0;
  let right = 0;
  let windowSum = 0;
  let max = 0;
  while (right < arr.length) {
    windowSum += arr[right];
    if (right - left + 1 >= k) {
      max = Math.max(windowSum, max);
      windowSum -= arr[left];
      left++;
    }
    right++;
  }
  return max;
};
// sliding window -- string method
// time complexity O(n)
// space complexity O(1)
var maxVowels = function (s, k) {
  let left = 0;
  let right = 0;
  let max = 0;
  let count = 0;
  const vowels = "aeuio";
  while (right < s.length) {
    if (vowels.includes(s[right])) {
      count++;
    }
    if (right - left + 1 >= k) {
      max = Math.max(max, count);
      if (vowels.includes(s[left])) {
        count--;
      }
      left++;
    }
    right++;
  }
  return max;
};

// sliding window -- brute force; string.match + regexp: time limit exceeded
// time complexity O(n) with higher order functions
// space complexity O(1)
var maxVowels = function (s, k) {
  let left = 0;
  let right = 0;
  let max = 0;
  const regexp = /[aeiou]/g;
  while (right < s.length) {
    if (right - left + 1 >= k) {
      const substr = s.slice(left, right + 1);
      const match = substr.match(regexp);
      if (match) {
        max = Math.max(match.length, max);
      }
      left++;
    }
    right++;
  }
  return max;
};
