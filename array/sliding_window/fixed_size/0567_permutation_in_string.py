# Given two strings s1 and s2, return true if s2 contains a permutation of s1, 
# or false otherwise.

# In other words, return true if one of s1's permutations is the substring of s2.

# https://leetcode.com/problems/permutation-in-string/
# similar
# LC 438 https://leetcode.com/problems/find-all-anagrams-in-a-string/

class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        l1, l2 = len(s1), len(s2)
        dict1, dict2 = {}, {}
        left = right = 0
        
        for char in s1:
            dict1[char] = dict1.get(char, 0) + 1
        
        while right < l2:
            dict2[s2[right]] = dict2.get(s2[right], 0) + 1
            if right - left + 1 == l1:
                if dict2 == dict1: return True
                dict2[s2[left]] -= 1
                if dict2[s2[left]] == 0: del dict2[s2[left]]
                left += 1
            right += 1
        
        return False
    
# for lower case only string, can use [0] * 26 as hash map
class Solution:
    def checkInclusion(self, s1: str, s2: str) -> bool:
        l1, l2 = len(s1), len(s2)
        map1, map2 = [0] * 26, [0] * 26
        left = right = 0

        for char in s1:
            map1[ord(char) - ord('a')] += 1
        
        while right < l2:
            map2[ord(s2[right]) - ord('a')] += 1
            if right - left + 1 == l1:
                if map1 == map2: return True
                map2[ord(s2[left]) - ord('a')] -= 1
                left += 1
            right += 1
        return False
