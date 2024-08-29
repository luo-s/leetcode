# Given an array of characters chars, compress it using the following algorithm:

# Begin with an empty string s. For each group of consecutive repeating characters in chars:

# If the group's length is 1, append the character to s.
# Otherwise, append the character followed by the group's length.
# The compressed string s should not be returned separately, but instead, be stored in the input character array chars. 
# Note that group lengths that are 10 or longer will be split into multiple characters in chars.

# After you are done modifying the input array, return the new length of the array.

# You must write an algorithm that uses only constant extra space.

# https://leetcode.com/problems/string-compression/

class Solution:
    def compress(self, chars: list[str]) -> int:
        l = len(chars)
        slow, cnt = 0, 1
        for fast in range(1, l + 1):
            if fast < l and chars[fast] == chars[fast - 1]:
                cnt += 1
            else:
                chars[slow] = chars[fast - 1]
                slow += 1
                if cnt > 1:
                    for c in str(cnt):
                        chars[slow] = c
                        slow += 1
                cnt = 1
        return slow

class Solution:
    def compress(self, chars: list[str]) -> int:
        l = len(chars)
        if l == 1:
            return 1
        slow, fast, cnt = 0, 1, 1
        while fast < l:
            if chars[fast] == chars[slow]:
                cnt += 1
            else:
                slow += 1
                if cnt > 1:
                    for i in str(cnt):
                        chars[slow] = i
                        slow += 1
                chars[slow] = chars[fast]
                cnt = 1
            fast += 1
        # handle the last compression
        slow += 1
        if cnt > 1:
            for i in str(cnt):
                chars[slow] = i
                slow += 1
        return slow
        
                

        
        
                
