# Given an array of strings strs, group the anagrams together. You can return 
# the answer in any order.

# An Anagram is a word or phrase formed by rearranging the letters of a 
# different word or phrase, typically using all the original letters exactly once.

# strs[i] consists of lowercase English letters.

# https://leetcode.com/problems/group-anagrams/

from collections import defaultdict
class Solution:
    def groupAnagrams(self, strs: List[str]) -> List[List[str]]:
        d = defaultdict(list)
        for word in strs:
            pattern = ''.join(sorted(word))
            d[pattern].append(word)
            # if pattern in d:
            #     d[pattern].append(word)
            # else:
            #     d[pattern] = [word]
        return list(d.values())

