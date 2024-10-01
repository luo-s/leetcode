# Given an integer array nums and an integer k, return the kth largest element in 
# the array.

# Note that it is the kth largest element in the sorted order, not the kth distinct 
# element.

# Can you solve it without sorting?

# https://leetcode.com/problems/kth-largest-element-in-an-array/
# similar
# LC 703 https://leetcode.com/problems/kth-largest-element-in-a-stream/

# counting sort -- TLE
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        ma, mi, l = max(nums), min(nums), len(nums)
        cnt = [0 for _ in range(ma - mi + 1)]
        for i in range(l):
            cnt[nums[i] - mi] += 1
        count = 0
        for i in range(ma - mi, -1, -1):
            count += cnt[i]
            if count >= k:
                return i + mi

# quick selection
# no need to sort the entire list, we just need the top k sorted
# time complexity O(n); worst case O(n^2)
# space complexity O(1)
import random
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        return self.quick_select(nums, k)
    def quick_select(self, nums: list[int], k: int) -> int:
        pivot = random.choice(nums)
        left = [num for num in nums if num < pivot]
        middle = [num for num in nums if num == pivot]
        right = [num for num in nums if num > pivot]
        # top k is in right
        if k <= len(right):
            return self.quick_select(right, k)
        # top k is in left
        if k > len(right) + len(middle):
            return self.quick_select(left, k - len(right) - len(middle))
        # top k is in middle, which is pivot
        return pivot

# heap sort
import heapq
class Solution:
    def findKthLargest(self, nums: list[int], k: int) -> int:
        heap = []
        for num in nums:
            heapq.heappush(heap, num)
            if len(heap) > k:
                heapq.heappop(heap)
        return heap[0]