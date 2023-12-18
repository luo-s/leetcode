/*
Given an array of string words, return all strings in words that is a substring of another word. 
You can return the answer in any order.
A substring is a contiguous sequence of characters within a string.

words[i] contains only lowercase English letters.
All the strings of words are unique.
*/

// https://leetcode.com/problems/string-matching-in-an-array/

// time complexity: O(n^2)
// space complexity: O(n)
var stringMatching = function(words) {
    let ans = new Set();
    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words.length; j++) {
            if (j === i) continue;
            if (words[j].length < words[i].length) continue;
            if (words[j].includes(words[i])) {
                ans.add(words[i]);
            }
        }
    }
    return Array.from(ans);
};

// time complexity: O(n^2)
// space complexity: O(n)
var stringMatching = function(words) {
    const masterWord = words.join('@');
    let result=[];
    for(let i=0; i<words.length; i++){
        if(masterWord.indexOf(words[i]) != masterWord.lastIndexOf(words[i])){
            result.push(words[i]);
        }
    }   
    return result;
};

// one liner
// we need to return part of the array, so we can use filter
// time complexity: O(n^2)
// space complexity: O(1)
var stringMatching = function(words) {
    return [...words.filter(word => words.some(w => w !== word && w.includes(word)))];
}
