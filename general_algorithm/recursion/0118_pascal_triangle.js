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

// recursion
var generate = function(numRows) {
    if (numRows === 1) {
        return [[1]];
    }
    let prevRows = generate(numRows - 1);
    let newRow = new Array(numRows).fill(1);
    
    for (let i = 1; i < numRows - 1; i++) {
        newRow[i] = prevRows[numRows - 2][i - 1] + prevRows[numRows - 2][i];
    }
    
    prevRows.push(newRow);
    return prevRows;
};
