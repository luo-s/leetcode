/*
Given an input string s, reverse the order of the words.

A word is defined as a sequence of non-space characters. The words in s will be 
separated by at least one space.

Return a string of the words in reverse order concatenated by a single space.

Note that s may contain leading or trailing spaces or multiple spaces between 
two words. The returned string should only have a single space separating the 
words. Do not include any extra spaces.

1 <= s.length <= 104
s contains English letters (upper-case and lower-case), digits, and spaces ' '.
There is at least one word in s.
*/

// https://leetcode.com/problems/reverse-words-in-a-string/

// https://leetcode.cn/problems/reverse-words-in-a-string/solutions/886528/dai-ma-sui-xiang-lu-dai-ni-gao-ding-zi-f-hg23/

// higher order function + regexr
// time complexity O(n)
// space complexity O(1)
var reverseWords = function (s) {
  return s.trim().split(/\s+/).reverse().join(" ");
};

// single pointer
// time complexity O(n)
// space complexity O(n)
var reverseWords = function (s) {
  let right = s.length - 1;
  let ans = [];
  while (right >= 0) {
    while (s[right] == " ") {
      right--;
    }
    if (right < 0) break;
    let word = [];
    while (s[right] !== " " && s[right] !== undefined) {
      word.push(s[right]);
      right--;
    }
    word.reverse();
    ans.push(word.join(""));
    console.log(ans, word);
  }
  return ans.join(" ");
};

// two pointers
// time complexity O(n)
// space complexity O(n)
var reverseWords = function (s) {
  const words = s.split(" ").filter((ele) => ele !== "");
  let left = 0,
    right = words.length - 1;
  while (left < right) {
    let temp = words[left];
    words[left] = words[right];
    words[right] = temp;
    left++;
    right--;
  }
  return words.join(" ");
};
