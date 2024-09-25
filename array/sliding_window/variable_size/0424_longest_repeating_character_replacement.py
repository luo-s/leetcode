# You are given a string s and an integer k. You can choose any character of the string and change it to any other uppercase English character. You can perform this operation at most k times.

# Return the length of the longest substring containing the same letter you can get after performing the above operations.

# https://leetcode.com/problems/longest-repeating-character-replacement/

class Solution:
    def characterReplacement(self, s: str, k: int) -> int:
        left = right = ans = mx_cnt = 0
        window = {}
    
        while right < len(s):
            # update window dict and most frequency 
            window[s[right]] = window.get(s[right], 0) + 1
            mx_cnt = max(mx_cnt, window[s[right]])
            # maintain the window size
            while right - left + 1 > k + mx_cnt:
                window[s[left]] -= 1
                left += 1
            # update the maximum window size
            ans = max(ans, right - left + 1)
            right += 1
        
        return ans
            


