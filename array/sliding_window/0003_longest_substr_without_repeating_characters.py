# Given a string s, find the length of the longest substring without repeating characters.

# https://leetcode.com/problems/longest-substring-without-repeating-characters/

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        slow, fast, max_cnt, l = 0, 0, 0, len(s)
        chars = set()
        while fast < l:
            if s[fast] not in chars:
                chars.add(s[fast])
                fast += 1
                max_cnt = max(max_cnt, len(chars))
            else:
                chars.remove(s[slow])
                slow += 1
        return max_cnt