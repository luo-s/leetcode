# Given a string s and an integer k, return true if you can use all the characters in s to construct k palindrome strings or false otherwise.

# https://leetcode.com/problems/construct-k-palindrome-strings/

# max k is len(s)
# how to reduce k? we need pairs
# the min k would be we put all pairs together, and put 1 single letter in the middle, plus singles left
# min k is the single char left without pairs
class Solution:
    def canConstruct(self, s: str, k: int) -> bool:
        # from collections import Counter
        # freq = Counter(s)
        freq = {}
        for c in s:
            freq[c] = freq.get(c, 0) + 1
        single = 0
        for c in freq:
            single += freq[c] % 2
        return single <= k <= len(s)
        
        