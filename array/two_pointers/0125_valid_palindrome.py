
# A phrase is a palindrome if, after converting all uppercase letters into 
# lowercase letters and removing all non-alphanumeric characters, it reads 
# the same forward and backward. Alphanumeric characters include letters and 
# numbers.

# s consists only of printable ASCII characters.

# Given a string s, return true if it is a palindrome, or false otherwise.

# https://leetcode.com/problems/valid-palindrome/

class Solution:
    def isPalindrome(self, s: str) -> bool:
        left, right = 0, len(s) - 1
        while left < right:
            # skip non-alphanumeric characters
            if not s[left].isalnum():
                left += 1
            elif not s[right].isalnum():
                right -= 1
            # compare the characters
            elif s[left].lower() != s[right].lower():
                return False
            else:
                left += 1
                right -= 1
        return True