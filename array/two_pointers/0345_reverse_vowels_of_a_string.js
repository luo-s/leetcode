/*
Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both 
lower and upper cases, more than once.
*/

// two pointers
// time complexity O(n)
// space complexity O(1)
var reverseVowels = function (s) {
  let array = s.split("");
  let vowels = ["a", "e", "i", "o", "u", "A", "E", "I", "O", "U"];
  let left = 0;
  let right = array.length - 1;
  while (left <= right) {
    if (vowels.includes(array[left]) && vowels.includes(array[right])) {
      let temp = array[left];
      array[left] = array[right];
      array[right] = temp;
      left++;
      right--;
    }
    if (!vowels.includes(array[left])) {
      left++;
    }
    if (!vowels.includes(array[right])) {
      right--;
    }
  }
  return array.join("");
};

console.log("hello");
console.log(reverseVowels("race a car"));
