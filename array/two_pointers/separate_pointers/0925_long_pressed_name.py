# Your friend is typing his name into a keyboard. Sometimes, when typing a character c, the key might get long pressed, and the character will be typed 1 or more times.

# You examine the typed characters of the keyboard. Return True if it is possible that it was your friends name, with some characters (possibly none) being long pressed.

# https://leetcode.com/problems/long-pressed-name/

class Solution:
    def isLongPressedName(self, name: str, typed: str) -> bool:
        p1, p2 = 0, 0
        l1, l2 = len(name), len(typed)
        
        # Traverse through both strings
        while p2 < l2:
            # If both characters match, move both pointers forward
            if p1 < l1 and name[p1] == typed[p2]:
                p1 += 1
                p2 += 1
            # If the current `typed` character is the same as the previous one (long press scenario)
            elif p2 > 0 and typed[p2] == typed[p2 - 1]:
                p2 += 1
            # Mismatch case: Characters don't match and it's not a valid long press
            else:
                return False
        
        # All characters in `name` should be used
        return p1 == l1