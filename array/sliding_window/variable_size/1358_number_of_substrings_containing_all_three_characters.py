# Given a string s consisting only of characters a, b and c.

# Return the number of substrings containing at least one occurrence of all these characters a, b and c.

# 3 <= s.length <= 5 x 10^4
# s only consists of a, b or c characters.

# https://leetcode.com/problems/number-of-substrings-containing-all-three-characters/

class Solution:
    def numberOfSubstrings(self, s: str) -> int:
        l = len(s)
        cnt = left = right = 0
        track = {}
        
        while right < l:
            # Add the current character to the window
            track[s[right]] = track.get(s[right], 0) + 1
            # When all three characters 'a', 'b', and 'c' are present
            while len(track) == 3:
                cnt += l - right  # Count all substrings that start at `left` and end at `right`
                track[s[left]] -= 1
                if track[s[left]] == 0:
                    del track[s[left]]
                left += 1  # Shrink the window from the left
            right += 1
        return cnt



