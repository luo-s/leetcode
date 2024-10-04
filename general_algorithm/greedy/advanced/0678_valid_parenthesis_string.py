# Given a string s containing only three types of characters: '(', ')' and '*', return true if s is valid.

# The following rules define a valid string:

# Any left parenthesis '(' must have a corresponding right parenthesis ')'.
# Any right parenthesis ')' must have a corresponding left parenthesis '('.
# Left parenthesis '(' must go before the corresponding right parenthesis ')'.
# '*' could be treated as a single right parenthesis ')' or a single left parenthesis '(' or an empty string "".

# https://leetcode.com/problems/valid-parenthesis-string/

class Solution:
    def checkValidString(self, s: str) -> bool:
        low = high = 0  # Track possible range of open parentheses
        
        for char in s:
            if char == '(':
                low += 1  # At least one more open parenthesis
                high += 1  # At most one more open parenthesis
            elif char == ')':
                low = max(low - 1, 0)  # Decrease low but don't go negative
                high -= 1  # Decrease high (this is a closing parenthesis)
            else:  # char == '*'
                low = max(low - 1, 0)  # Treat '*' as ')', or ignore it
                high += 1  # Treat '*' as '('
            
            # If high becomes negative, there are too many closing parentheses
            if high < 0:
                return False
        
        # If low is zero, we have a valid string (balanced parentheses)
        return low == 0