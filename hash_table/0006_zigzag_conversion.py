# The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)
# P   A   H   N
# A P L S I I G
# Y   I   R
# And then read line by line: "PAHNAPLSIIGYIR"
# Write the code that will take a string and make this conversion given a number of rows:
# string convert(string s, int numRows);

# https://leetcode.com/problems/zigzag-conversion/description/

class Solution:
    def convert(self, s: str, numRows: int) -> str:
        l, ans = len(s), [''] * numRows
        if l <= numRows or numRows == 1:
            return s
        for i in range(numRows):
            # vertical elements
            index1 = list(range(i, l, 2 * (numRows - 1)))
            # diagonal elements
            if i > 0 and i < numRows - 1:
                index2 = list(range(2 * (numRows - 1) - i, l, 2 * (numRows - 1)))
            else:
                index2 = []
            # combine for each row
            index = sorted(index1 + index2 )
            for j in index:
                ans[i] += s[j]
        return ''.join(ans)
    
class Solution:
    def convert(self, s: str, numRows: int) -> str:
        if len(s) <= numRows or numRows == 1:
            return s
        ans = [''] * numRows
        row, step = 0, 1
        for char in s:
            ans[row] += char
            if row == 0:
                step = 1
            elif row == numRows - 1:
                step = -1
            row += step
        return ''.join(ans)