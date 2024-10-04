# You are given a string s. We want to partition the string into as many parts as possible so that each letter appears in at most one part.

# Note that the partition is done so that after concatenating all the parts in order, the resultant string should be s.

# Return a list of integers representing the size of these parts.

# https://leetcode.com/problems/partition-labels/
# similar
# LC 56 https://leetcode.com/problems/merge-intervals/
# LC 45 https://leetcode.com/problems/jump-game-ii/

# mark the letter appearance of first and last time, and then it become merge intervals
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        # Mark the first and last appearance of each letter
        position = {}
        l = len(s)
        for i in range(l):
            if s[i] not in position:
                position[s[i]] = (i, -1)
            else:
                position[s[i]] = (position[s[i]][0], i)

        # Create intervals based on first and last appearance
        intervals = []
        for char in position:
            start, end = position[char]
            if end == -1:
                intervals.append([start, start])
            else:
                intervals.append([start, end])
        
        # Sort intervals by start time
        intervals.sort(key=lambda interval: interval[0])
        
        # Merge intervals
        merged = []
        for start, end in intervals:
            if not merged or merged[-1][1] < start:
                merged.append([start, end])
            else:
                merged[-1][1] = max(merged[-1][1], end)
        
        # Calculate the size of each partition
        res = []
        for i, j in merged:
            res.append(j - i + 1)
        
        return res

# another approach
class Solution:
    def partitionLabels(self, s: str) -> List[int]:
        # Track the last occurrence of each character
        last_occurrence = {char: i for i, char in enumerate(s)}
        partitions = []
        start, end = 0, 0
        
        # Traverse the string and adjust partitions dynamically
        for i, char in enumerate(s):
            # the max end we need to go to avoid any char appear in multiple substrings
            end = max(end, last_occurrence[char])
            # once we catch up with the end, we got one substring
            if i == end:
                partitions.append(end - start + 1)
                start = i + 1
        
        return partitions