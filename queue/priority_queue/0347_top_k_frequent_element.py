# Given an integer array nums and an integer k, return the k most frequent 
# elements. You may return the answer in any order.

# k is in the range [1, the number of unique elements in the array].

# It is guaranteed that the answer is unique.

# https://leetcode.com/problems/top-k-frequent-elements/

# priority queue / heap sort
import heapq
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_map = dict()
        for num in nums:
            freq_map[num] = freq_map.get(num, 0) + 1
        top_k_ele = []
        for num, freq in freq_map.items():
            heapq.heappush(top_k_ele, (freq, num))
            if len(top_k_ele) > k:
                heapq.heappop(top_k_ele)
        top_k = []
        while top_k_ele:
            top_k.append(heapq.heappop(top_k_ele)[1])
        return top_k
    
# bucket sort
class Solution:
    def topKFrequent(self, nums: List[int], k: int) -> List[int]:
        freq_map = dict()
        for num in nums:
            freq_map[num] = freq_map.get(num, 0) + 1
        buckets = [[] for _ in range(max(freq_map.values()) + 1)]
        for num in freq_map:
            buckets[freq_map[num]].append(num)
        res = []
        for i in range(len(buckets) - 1, 0, -1):
            for num in buckets[i]:
                res.append(num)
        return res[:k]

