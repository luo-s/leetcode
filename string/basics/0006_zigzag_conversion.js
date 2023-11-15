/*
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"
Write the code that will take a string and make this conversion given a number of rows:
string convert(string s, int numRows);
*/

// https://leetcode.com/problems/zigzag-conversion/description/

// pattern repeat every (2 * numRows - 2);
// hash table
// time complexity O(n^2)
// space complexity O(n)
var convert = function(s, numRows) {
    if (s.length <= numRows) return s;
    if (numRows == 1) return s;
    let tracker = {};
    for (let i = 0; i < s.length; i++) {
        tracker[i] = i % (numRows * 2 - 2);
        if (tracker[i] < numRows) tracker[i]++;
        else tracker[i] = numRows * 2 - 1 - tracker[i];
    }
    let ans = []; let row = 1;
    while (row <= numRows) {
        for (let entry of Object.entries(tracker)) {
            if (entry[1] == row) ans.push(s[entry[0]]);
        }
        row++;
    }
    return ans.join("");
};

console.log(convert("PAYPALISHIRING", 3));