# Given a string s, find the length of the longest substring without repeating characters.

# https://leetcode.com/problems/longest-substring-without-repeating-characters/
# similar
# LC 1695 https://leetcode.com/problems/maximum-erasure-value/

# sliding window to describe a substring & hashmap to check duplicates
class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        slow, fast, max_cnt, l = 0, 0, 0, len(s)
        chars = set()
        while fast < l:
            if s[fast] not in chars:
                chars.add(s[fast])
                fast += 1
                max_cnt = max(max_cnt, len(chars))
            # keep moving left until window only has unique char
            else:
                chars.remove(s[slow])
                slow += 1
        return max_cnt

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, max_cnt, l = 0, 0, 0, len(s)
        window = dict()
        while right < l:
            window[s[right]] = window.get(s[right], 0) + 1
            # keep moving left until window only has unique char
            while window[s[right]] > 1:
                window[s[left]] -= 1
                left += 1
            max_cnt = max(max_cnt, right - left + 1)
            right += 1
        return max_cnt

class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        left, right, ans, l = 0, 0, 0, len(s)
        char_map = dict()
        while right < l:
            char_map[s[right]] = char_map.get(s[right], 0) + 1
            while char_map[s[right]] > 1:
                char_map[s[left]] -= 1
                # if use char_map length as window size, need to delete key if value == 0
                if char_map[s[left]] == 0: del char_map[s[left]]
                left += 1
            ans = max(ans, len(char_map))
            right += 1
        return max(ans, len(char_map))