/*
For a string sequence, a string word is k-repeating if word concatenated k times is a substring of sequence. 
The word's maximum k-repeating value is the highest value k where word is k-repeating in sequence. 
If word is not a substring of sequence, word's maximum k-repeating value is 0.

Given strings sequence and word, return the maximum k-repeating value of word in sequence.
*/

// https://leetcode.com/problems/maximum-repeating-substring/

// brute force
// time complexity: O(n^2)
// space complexity: O(1)
var maxRepeating = function(sequence, word) {
    // corner case
    if(sequence.length < word.length) return 0;
    if(sequence === word) return 1;
    let ans = 0;
    for (let i = 0; i < Math.floor(sequence.length / word.length); i++) {
        if (strStr(sequence, word.repeat(i + 1)) > -1) {
            ans = i + 1;
        }
    }
    function strStr(haystack, needle) {
        if(needle === "") return 0;
        if(haystack === "") return -1;
        for(let i = 0; i < haystack.length; i++) {
            let j = 0;
            while(j < needle.length && haystack[i+j] === needle[j]) {
                j++;
            }
            if(j === needle.length) return i;
        }
        return -1;
    }
    return ans;
}

// binary search
// time complexity: O(nlogn)
// space complexity: O(1)
var maxRepeating = function(sequence, word) {
    // corner case
    if(sequence.length < word.length) return 0;
    if(sequence === word) return 1;
    let ans = 0, left = 0, right = Math.floor(sequence.length / word.length);
    while(left <= right) {
        let mid = Math.floor((left + right) / 2);
        if(sequence.includes(word.repeat(mid))) {
            ans = mid;
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return ans;
}



console.log(maxRepeating("ababc", "ab")); // 2