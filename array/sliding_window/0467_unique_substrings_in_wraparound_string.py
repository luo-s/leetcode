# We define the string base to be the infinite wraparound string of "abcdefghijklmnopqrstuvwxyz", so base will look like this:

# "...zabcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyzabcd....".
# Given a string s, return the number of unique non-empty substrings of s are present in base.

# https://leetcode.com/problems/unique-substrings-in-wraparound-string/

class Solution:
    def findSubstringInWraproundString(self, s: str) -> int:
        cnt = left = right = 0
        track = set()
        while right < len(s):
            if s[right] not in track:
                track.add(s[right])
                cnt += len(track)
            else:
                while s[left] != s[right]:
                    track.remove(s[left])
                    left += 1
                left += 1
            right += 1
        return cnt
                

class Solution:
    def findSubstringInWraproundString(self, s: str) -> int:
        left = right = 0
        track, sub_arr = set(), set()
        while right < len(s):
            if s[right] not in track:
                track.add(s[right])
                start = left
                while start <= right:
                    sub_arr.add(s[left : right + 1])
                    start += 1
            else:
                while s[left] != s[right]:
                    track.remove(s[left])
                    left += 1
                right = left
                left += 1
            right += 1
        return len(sub_arr)
