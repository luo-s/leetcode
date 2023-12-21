/*
Given an integer numRows, return the first numRows of Pascal's triangle.
1 <= numRows <= 30
*/

// https://leetcode.com/problems/pascals-triangle/

// brute force
// time: O(n^2)
// space: O(n^2)
var generate = function(numRows) {
    let result = [];
    for (let i = 0; i < numRows; i++) {
        let row = [];
        for (let j = 0; j <= i; j++) {
            if (j === 0 || j === i) row.push(1);
            else row.push(result[i - 1][j - 1] + result[i - 1][j]);
        }
        result.push(row);
    }
    return result;
};

var generate = function(numRows) {}
