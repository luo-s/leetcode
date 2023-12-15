/*
Given a text and a pattern, return the index of pattern in text, or -1 if pattern 
is not found.
*/

var bruteForce = function (text, pattern) {
  // corner case
  if (!text || !pattern || text.length < pattern.length) return -1;
  // loop through text
  for (let i = 0; i <= text.length - pattern.length; i++) {
    // check if pattern matches
    let j = 0;
    while (j < pattern.length && text[i + j] === pattern[j]) {
      j++;
    }
    // if pattern matches, return the index
    if (j === pattern.length) return i;
  }
  // if pattern does not match, return -1
  return -1;
};

var bruteForce2 = function (text, pattern) {
  // corner case
  if (!text || !pattern || text.length < pattern.length) return -1;
  let i = 0,
    j = 0;
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
