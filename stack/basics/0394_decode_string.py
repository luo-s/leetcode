# Given an encoded string, return its decoded string.

# The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets 
# is being repeated exactly k times. Note that k is guaranteed to be a positive integer.

# You may assume that the input string is always valid; 
# there are no extra white spaces, square brackets are well-formed, etc. 
# Furthermore, you may assume that the original data does not contain any digits and that 
# digits are only for those repeat numbers, k. 
# For example, there will not be input like 3a or 2[4].

# The test cases are generated so that the length of the output will never exceed 105.

# https://leetcode.com/problems/decode-string/description/

class Solution:
    def decodeString(self, s: str) -> str:
        stack, res, repeat = [], "", 0
        for char in s:
            if char == '[':
                stack.append([repeat, res])
                res, repeat = "", 0
            elif char == ']':
                cur_repeat, last_res = stack.pop()
                res = last_res + cur_repeat * res
            elif '0' <= char <= '9':
                repeat = repeat * 10 + int(char)            
            else:
                res += char
        return res

