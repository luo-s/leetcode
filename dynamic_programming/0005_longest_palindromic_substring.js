/*
Given a string s, return the longest 
palindromic substring in s.

s consist of only digits and English letters.
*/

// // brute force
// // time complexity O(n^2)
// // space complexity O(n^2);
// var longestPalindrome = function (s) {
//   if (s.length <= 1) return s;
//   var isPalindrome = function (s) {
//     let left = 0;
//     let right = s.length - 1;
//     while (left < right) {
//       if (s[left] !== s[right]) {
//         return false;
//       }
//       left++;
//       right--;
//     }
//     return true;
//   };
//   let longest = "";
//   let substr;
//   for (let i = 0; i < s.length; i++) {
//     for (let j = i + 1; j < s.length + 1; j++) {
//       substr = s.slice(i, j);
//       if (isPalindrome(substr)) {
//         if (substr.length > longest.length) {
//           longest = substr;
//         }
//       }
//     }
//   }
//   return longest;
// };

// dynamic programming
var longestPalindrome = function (s) {};
