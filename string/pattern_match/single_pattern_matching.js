/*
Given a text and a pattern, return the index of pattern in text, or -1 if pattern 
is not found.
*/

var bruteForce = function (text, pattern) {
  // corner case
  if (!text || !pattern || text.length < pattern.length) return -1;
  let i = 0,
    j = 0;
  // loop through text and pattern at the same time
  while (i < text.length && j < pattern.length) {
    if (text[i] === pattern[j]) {
      i++;
      j++;
    } else {
      i = i - j + 1; // failed matching, reset i to the next index
      j = 0; // failed matching, reset j to 0
    }
  }
  // if pattern matches, return the index
  if (j === pattern.length) return i - j;
  // if pattern does not match, return -1
  return -1;
};

var bruteForce2 = function (text, pattern) {
  // corner case
  if (!text || !pattern || text.length < pattern.length) return -1;
  // loop through text
  for (let i = 0; i <= text.length - pattern.length; i++) {
    // check if pattern matches
    let j = 0;
    while (j < pattern.length && text[i + j] === pattern[j]) {
      j++;
    }
    // if j reach to the end of pattern, return the index
    if (j === pattern.length) return i;
  }
  // if pattern does not match, return -1
  return -1;
};

// Knuth-Morris-Pratt algorithm
// If the prefix and suffix of pattern repeats, we can skip the repeated part
var kmp = function (text, pattern) {
  // prefix talbe: The length of the longest proper prefix
  // that matches a proper suffix in the same subpattern.
  // lps: longest proper prefix which is also suffix
  var lps = function (pattern) {
    let table = new Array(pattern.length).fill(0); // initialize the table with 0s
    for (let i = 1; i < pattern.length; i++) {
      let j = table[i - 1]; // start from the previous element
      while (j > 0 && pattern[i] !== pattern[j]) {
        j = table[j - 1]; // go back to the previous element
      }
      if (pattern[i] === pattern[j]) j++;
      table[i] = j; // update the table at index i
    }
    return table;
  };
  // corner case
  if (!text || !pattern || text.length < pattern.length) return -1;
  // construct prefix table
  let prefixTable = lps(pattern);
  // loop through text and pattern at the same time using two pointers
  let j = 0;
  for (let i = 0; i < text.length; i++) {
    while (j > 0 && text[i] !== pattern[j]) {
      j = prefixTable[j - 1]; // go back to the previous element
    }
    if (text[i] === pattern[j]) j++;
    // if j reach to the end of pattern (pattern matches), return the index
    if (j === pattern.length) return i - j + 1;
  }
  // pattern does not match, return -1
  return -1;
};
