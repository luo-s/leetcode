# You are given a string s consisting of lowercase English letters. A duplicate 
# removal consists of choosing two adjacent and equal letters and removing them.

# We repeatedly make duplicate removals on s until we no longer can.

# Return the final string after all such duplicate removals have been made. 
# It can be proven that the answer is unique.

# https://leetcode.com/problems/remove-all-adjacent-duplicates-in-string/

class Solution:
    def removeDuplicates(self, s: str) -> str:
        stack = []
        for char in s:
            if stack and char is stack[-1]:
                stack.pop()
                continue
            stack.append(char)
        return ''.join(stack)