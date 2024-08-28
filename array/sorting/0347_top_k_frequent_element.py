# Given an integer array nums and an integer k, return the k most frequent 
# elements. You may return the answer in any order.

# k is in the range [1, the number of unique elements in the array].

# It is guaranteed that the answer is unique.

# https://leetcode.com/problems/top-k-frequent-elements/

# heap 
class Solution:
    def topKFrequent(self, nums: list[int], k: int) -> list[int]:


        