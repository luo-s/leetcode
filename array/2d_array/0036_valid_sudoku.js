/*
Determine if a 9 x 9 Sudoku board is valid. Only the filled cells need to be 
validated according to the following rules:

Each row must contain the digits 1-9 without repetition.
Each column must contain the digits 1-9 without repetition.
Each of the nine 3 x 3 sub-boxes of the grid must contain the digits 1-9 
without repetition.
Note:

A Sudoku board (partially filled) could be valid but is not necessarily solvable.
Only the filled cells need to be validated according to the mentioned rules.

board.length == 9
board[i].length == 9
board[i][j] is a digit 1-9 or '.'.
*/

var isValidSudoku = function (board) {
  // validate the rows
  for (let i = 0; i < 9; i++) {
    const tracker = {};
    for (let j = 0; j < 9; j++) {
      if (tracker[board[i][j]] !== undefined && board[i][j] !== ".") {
        return false;
      } else {
        tracker[board[i][j]] = 1;
      }
    }
  }
  // validate the colums
  for (let i = 0; i < 9; i++) {
    const tracker = {};
    for (let j = 0; j < 9; j++) {
      if (tracker[board[j][i]] !== undefined && board[j][i] !== ".") {
        console.log("columns", [j, i]);
        return false;
      } else {
        tracker[board[j][i]] = 1;
      }
    }
  }
  // validate the sub-boxes
  for (let i = 0; i < 9; i += 3) {
    for (let j = 0; j < 9; j += 3) {
      const tracker = [];
      tracker.push(board[i][j]);
      tracker.push(board[i][j + 1]);
      tracker.push(board[i][j + 2]);
      tracker.push(board[i + 1][j]);
      tracker.push(board[i + 1][j + 1]);
      tracker.push(board[i + 1][j + 2]);
      tracker.push(board[i + 2][j]);
      tracker.push(board[i + 2][j + 1]);
      tracker.push(board[i + 2][j + 2]);
      let trackerFiltered = tracker.filter((ele) => ele > 0);
      let set = new Set(trackerFiltered);
      if (set.size !== trackerFiltered.length) return false;
    }
  }
  return true;
};
