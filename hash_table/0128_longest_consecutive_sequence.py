# Given an unsorted array of integers nums, return the length of the longest 
# consecutive elements sequence.

# You must write an algorithm that runs in O(n) time.

# https://leetcode.com/problems/longest-consecutive-sequence/

# sort
# time complexity O(nlogn)
# space complexity O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if not nums: 
            return 0
        sorted_num = sorted(list(set(nums)))
        ans = cnt = 1
        for i in range(1, len(sorted_num)):
            if sorted_num[i] - sorted_num[i - 1] == 1:
                cnt += 1
                ans = max(ans, cnt)
            else: 
                cnt = 1
        return ans
    
# hash table -- MLE
# time complexity O(n)
# space complexity O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        if len(nums) <= 1:
            return len(nums)
        mi, ma = min(nums), max(nums)
        track = [' ' for _ in range(ma - mi + 1)]
        for num in nums:
            track[num - mi] = '1'
        res = ''.join(track).split()
        max_cnt = 0
        for ele in res:
            max_cnt = max(len(ele), max_cnt)
        return max_cnt

# hash table
# time complexity O(n)
# space complexity O(n)
class Solution:
    def longestConsecutive(self, nums: List[int]) -> int:
        longest_streak = 0
        num_set = set(nums)
        
        for num in num_set:
            if num - 1 not in num_set:  # num is the start of consecutive sequence
                current_num = num
                current_streak = 1
                while current_num + 1 in num_set:
                    current_num += 1
                    current_streak += 1
                longest_streak = max(longest_streak, current_streak)
        
        return longest_streak

