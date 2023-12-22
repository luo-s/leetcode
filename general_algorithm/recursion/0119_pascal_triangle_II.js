/*
Given an integer rowIndex, return the rowIndexth (0-indexed) row of the Pascal's triangle.
0 <= rowIndex <= 33
*/

// https://leetcode.com/problems/pascals-triangle-ii/

// recursion
var getRow = function(rowIndex) {
    if (rowIndex === 0) return [1];
    let prevRow = getRow(rowIndex - 1);
    let newRow = new Array(rowIndex + 1).fill(1);
    for (let i = 1; i < rowIndex; i++) {
        newRow[i] = prevRow[i - 1] + prevRow[i];
    }
    return newRow;
};