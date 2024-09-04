# Given a string s, sort it in decreasing order based on the frequency of the characters. 
# The frequency of a character is the number of times it appears in the string.

# Return the sorted string. If there are multiple answers, return any of them.

# https://leetcode.com/problems/sort-characters-by-frequency/description/

# heap sort
import heapq
class Solution:
    def frequencySort(self, s: str) -> str:
        char_map = dict()
        for char in s:
            char_map[char] = char_map.get(char, 0) + 1
        char_freq = []
        for char, freq in char_map.items():
            heapq.heappush(char_freq, (-freq, char))
        ans = ''
        while char_freq:
            freq_n, char = heapq.heappop(char_freq)
            ans += char * (-freq_n)
        return ans
    
# bucket sort
class Solution:
    def frequencySort(self, s: str) -> str:
        freq_map = {}
        for char in s:
            freq_map[char] = freq_map.get(char, 0) + 1
        # creates bucket by frequency
        buckets = [[] for i in range(max(freq_map.values()) + 1)]
        for char in freq_map:
            buckets[freq_map[char]].append(char)
        res = ''
        # reverse traverse the bucket
        for i in range(len(buckets) - 1, 0, -1):
            for char in buckets[i]:
                res += char * i
        return res