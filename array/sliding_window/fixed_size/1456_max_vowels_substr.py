# Given a string s and an integer k, return the maximum number of vowel letters in any substring of s with length k.

# Vowel letters in English are 'a', 'e', 'i', 'o', and 'u'.

# https://leetcode.com/problems/maximum-number-of-vowels-in-a-substring-of-given-length/

class Solution:
    def maxVowels(self, s: str, k: int) -> int:
        vowels = set('aeiou')
        left = right = window_sum = ans = 0
        l = len(s)

        while right < l:
            window_sum += (s[right] in vowels)
            if right - left + 1 == k:
                ans = max(ans, window_sum)
                window_sum -= (s[left] in vowels)
                left += 1
            right += 1
        
        return ans